// js/proctor.js

// TODO: Replace with your actual EmailJS keys
const emailjsConfig = {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
};

let stream = null;
let proctorActive = false;
let aiModel = null;
let aiInterval = null;
let missingFaceCount = 0;

async function initProctoring() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(emailjsConfig.publicKey);
    }
    await startWebcam();
    setupTabMonitoring();
    loadAIModel();
}

async function loadAIModel() {
    try {
        aiModel = await cocoSsd.load();
        document.getElementById('aiStatus').classList.replace('bg-warning', 'bg-success');
        document.getElementById('aiStatus').classList.replace('text-dark', 'text-white');
        document.getElementById('aiStatus').innerHTML = '<i class="bi bi-shield-check"></i> AI Proctor Active';
        startAIAnalysis();
    } catch (err) {
        console.error("AI Model failed to load:", err);
        document.getElementById('aiStatus').classList.replace('bg-warning', 'bg-danger');
        document.getElementById('aiStatus').classList.replace('text-dark', 'text-white');
        document.getElementById('aiStatus').innerHTML = 'AI Error';
    }
}

function startAIAnalysis() {
    const video = document.getElementById('webcamVideo');
    if (!video || !aiModel) return;

    aiInterval = setInterval(async () => {
        if (!proctorActive || isSubmitting) return;

        try {
            const predictions = await aiModel.detect(video);
            
            let personCount = 0;
            let phoneDetected = false;

            predictions.forEach(prediction => {
                if (prediction.class === 'cell phone') {
                    phoneDetected = true;
                }
                if (prediction.class === 'person') {
                    personCount++;
                }
            });

            if (phoneDetected) {
                handleInfraction("Mobile Phone Detected", "AI detected a mobile phone in the webcam frame.");
                return;
            }

            if (personCount > 1) {
                handleInfraction("Multiple People Detected", `AI detected ${personCount} people in the frame.`);
                return;
            }

            if (personCount === 0) {
                missingFaceCount++;
                if (missingFaceCount >= 3) { // Allows ~9 seconds of looking away before failing
                    handleInfraction("Face Missing", "AI could not detect the student's face for an extended period.");
                }
            } else {
                missingFaceCount = 0; // reset
            }

        } catch (err) {
            console.error("AI Analysis error:", err);
        }
    }, 3000); // Analyze every 3 seconds
}

async function startWebcam() {
    const video = document.getElementById('webcamVideo');
    if (!video) return;

    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        proctorActive = true;
        
        // Listen for camera hardware interruptions (unplugged or blocked by OS)
        stream.getVideoTracks()[0].onended = () => {
            if (proctorActive && !isSubmitting) {
                handleInfraction("Camera Interrupted", "Webcam hardware was unplugged or disabled mid-test.");
            }
        };

    } catch (err) {
        console.error("Webcam access denied: ", err);
        handleInfraction("Webcam Disabled", "Student denied or disabled webcam access.");
    }
}

function stopWebcam() {
    if (aiInterval) clearInterval(aiInterval);
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    proctorActive = false;
}

function setupTabMonitoring() {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && proctorActive && !isSubmitting) {
            handleInfraction("Tab Switched", "Student navigated away from the test tab.");
        }
    });

    window.addEventListener('pagehide', () => {
        if (proctorActive && !isSubmitting) {
            handleInfraction("Page Closed", "Student closed or refreshed the page.");
        }
    });
}

async function handleInfraction(eventType, description) {
    if (isSubmitting) return;

    // We must log the event and send email BEFORE we call submitTest, 
    // because submitTest redirects the page away and kills network requests!
    
    // Stop webcam immediately
    stopWebcam();
    
    alert(`SECURITY ALERT: ${eventType}. Your test has been submitted and the admin has been notified.`);

    const logPromise = (typeof logProctorEvent === 'function' && currentUser) 
        ? logProctorEvent(currentUser.rollNumber, currentUser.name, eventType, description) 
        : Promise.resolve();

    let emailPromise = Promise.resolve();
    if (typeof emailjs !== 'undefined' && currentUser) {
        const templateParams = {
            admin_email: "priya@example.com", 
            student_name: currentUser.name,
            roll_number: currentUser.rollNumber,
            event_type: eventType,
            description: description,
            time: new Date().toLocaleString()
        };
        emailPromise = emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams).catch(e => console.error("EmailJS failed", e));
    }

    // Wait for network requests to finish
    await Promise.all([logPromise, emailPromise]);

    // Finally submit the test which redirects
    if (typeof submitTest === 'function') {
        submitTest(true); 
    }
}
