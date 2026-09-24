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

function handleInfraction(eventType, description) {
    if (isSubmitting) return;

    // Stop timer and webcam
    if (typeof submitTest === 'function') {
        submitTest(true); // auto-submit test as fail/incomplete
    }
    stopWebcam();
    
    alert(`SECURITY ALERT: ${eventType}. Your test has been submitted and the admin has been notified.`);

    // Send data to Firebase
    if (typeof logProctorEvent === 'function' && currentUser) {
        logProctorEvent(currentUser.rollNumber, currentUser.name, eventType, description);
    }

    // Send Email via EmailJS
    if (typeof emailjs !== 'undefined' && currentUser) {
        const templateParams = {
            admin_email: "priya@example.com", // Replace if needed in EmailJS template
            student_name: currentUser.name,
            roll_number: currentUser.rollNumber,
            event_type: eventType,
            description: description,
            time: new Date().toLocaleString()
        };

        emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams)
            .then(() => {
                console.log("Admin email sent successfully.");
            }, (error) => {
                console.error("Failed to send email.", error);
            });
    }
}
