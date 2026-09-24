// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdN-vcFza46CdSWTizokpV-4c2mPdaEyc",
  authDomain: "priya-developer.firebaseapp.com",
  projectId: "priya-developer",
  storageBucket: "priya-developer.firebasestorage.app",
  messagingSenderId: "283917047303",
  appId: "1:283917047303:web:20d3f6ac0a5780fdb0fca2",
  measurementId: "G-CV4B8W93BC"
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
