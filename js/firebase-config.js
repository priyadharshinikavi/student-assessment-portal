// js/firebase-config.js

// TODO: Replace this with your actual Firebase config object
// You can get this by creating a project at https://console.firebase.google.com
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Global utility to save proctor logs to Firebase
async function logProctorEvent(rollNumber, studentName, eventType, description) {
    try {
        await db.collection("proctorLogs").add({
            rollNumber: rollNumber,
            studentName: studentName,
            eventType: eventType,
            description: description,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Proctor event logged to Firebase.");
    } catch (e) {
        console.error("Error logging proctor event: ", e);
    }
}

// Global utility to save student scores to Firebase
async function saveScoreToFirebase(rollNumber, studentName, subject, score, percentage, status) {
    try {
        await db.collection("studentScores").add({
            rollNumber: rollNumber,
            studentName: studentName,
            subject: subject,
            score: score,
            percentage: percentage,
            status: status,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Score saved to Firebase.");
    } catch (e) {
        console.error("Error saving score: ", e);
    }
}
