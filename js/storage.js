// js/storage.js

const StorageUtils = {
    // Generate the user-specific key based on roll number
    getUserKey: function(rollNumber, type) {
        return `student_${rollNumber}_${type}`;
    },

    // Save user progress
    saveProgress: function(rollNumber, progressData) {
        localStorage.setItem(this.getUserKey(rollNumber, 'progress'), JSON.stringify(progressData));
    },

    // Load user progress
    getProgress: function(rollNumber) {
        const data = localStorage.getItem(this.getUserKey(rollNumber, 'progress'));
        return data ? JSON.parse(data) : null;
    },

    // Save test session data (answers, timer, current question)
    saveTestSession: function(rollNumber, subject, sessionData) {
        localStorage.setItem(this.getUserKey(rollNumber, `session_${subject}`), JSON.stringify(sessionData));
    },

    // Load test session data
    getTestSession: function(rollNumber, subject) {
        const data = localStorage.getItem(this.getUserKey(rollNumber, `session_${subject}`));
        return data ? JSON.parse(data) : null;
    },

    // Clear test session (after submission)
    clearTestSession: function(rollNumber, subject) {
        localStorage.removeItem(this.getUserKey(rollNumber, `session_${subject}`));
    },

    // Current logged in user (session state)
    setCurrentUser: function(userObj) {
        sessionStorage.setItem('currentUser', JSON.stringify(userObj));
    },

    getCurrentUser: function() {
        const data = sessionStorage.getItem('currentUser');
        return data ? JSON.parse(data) : null;
    },

    logout: function() {
        sessionStorage.removeItem('currentUser');
    },

    // Default progress structure
    getInitialProgress: function(rollNumber) {
        const setNum = ((parseInt(rollNumber) - 101) % 10) + 1;
        return {
            rollNumber: rollNumber,
            assignedSet: setNum,
            subjects: {
                html: { status: 'unlocked', score: 0, percentage: 0, practical: 'locked' },
                css: { status: 'locked', score: 0, percentage: 0, practical: 'locked' },
                bootstrap: { status: 'locked', score: 0, percentage: 0, practical: 'locked' },
                javascript: { status: 'locked', score: 0, percentage: 0, practical: 'locked' },
                jquery: { status: 'locked', score: 0, percentage: 0, practical: 'locked' }
            },
            courseCompleted: false
        };
    }
};
