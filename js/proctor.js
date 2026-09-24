// js/proctor.js

// TODO: Replace with your actual EmailJS keys
const emailjsConfig = {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
};

let stream = null;
let proctorActive = false;

function initProctoring() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(emailjsConfig.publicKey);
    }
    startWebcam();
    setupTabMonitoring();
}

async function startWebcam() {
    const video = document.getElementById('webcamVideo');
    if (!video) return;

    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        proctorActive = true;
    } catch (err) {
        console.error("Webcam access denied: ", err);
        handleInfraction("Webcam Disabled", "Student denied or disabled webcam access.");
    }
}

function stopWebcam() {
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
