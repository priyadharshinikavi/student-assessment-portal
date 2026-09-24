// js/test.js

let currentUser = null;
let currentSubject = null;
let questions = [];
let currentQuestionIndex = 0;
let answers = {};
let states = {}; // visited, marked
let timer = null;
let introModal = null;
let submitModal = null;
let isSubmitting = false;

const TOTAL_QUESTIONS = 50;
const TEST_DURATION_MINS = 60;

document.addEventListener('DOMContentLoaded', async () => {
    // PRE-FLIGHT HARDWARE & SOFTWARE CHECKS
    
    // 1. Check OS (Must be Windows)
    const isWindows = navigator.userAgent.toLowerCase().includes('windows');
    if (!isWindows) {
        alert("SYSTEM REQUIREMENT FAILED: This assessment requires a Windows PC. Please log in from a Windows device to continue.");
        window.location.href = "dashboard.html";
        return;
    }

    // 2. Check Internet Connection
    if (!navigator.onLine) {
        alert("NETWORK ERROR: No internet connection detected. Please connect to the internet to take this test.");
        window.location.href = "dashboard.html";
        return;
    }
    
    if (navigator.connection && navigator.connection.downlink) {
        if (navigator.connection.downlink < 0.5) { // less than 0.5 Mbps
            alert("NETWORK ERROR: Your internet connection is too slow. A stable broadband connection is required.");
            window.location.href = "dashboard.html";
            return;
        }
    }

    // 3. Check Camera Hardware
    let hasCamera = false;
    try {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            const devices = await navigator.mediaDevices.enumerateDevices();
            hasCamera = devices.some(device => device.kind === 'videoinput');
        }
    } catch (err) {
        console.error("Error enumerating devices:", err);
    }
    
    if (!hasCamera) {
        alert("CRITICAL HARDWARE ERROR: No camera device was found on this computer. You cannot proceed with the assessment.");
        window.location.href = "dashboard.html";
        return; // Stop execution
    }

    currentUser = checkAuth();
    if (!currentUser) return;

    // Get subject from URL
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject');
    
    if (!currentSubject) {
        window.location.href = 'dashboard.html';
        return;
    }

    // Verify progress lock status
    const progress = StorageUtils.getProgress(currentUser.rollNumber);
    if (!progress || !progress.subjects[currentSubject] || progress.subjects[currentSubject].status === 'locked') {
        alert("This subject is locked or unavailable.");
        window.location.href = 'dashboard.html';
        return;
    }
    
    // Check if test was already passed
    if (progress.subjects[currentSubject].status === 'passed') {
        alert("You have already passed this assessment.");
        window.location.href = 'dashboard.html';
        return;
    }

    initTestSetup();
});

function initTestSetup() {
    // Setup Intro Modal
    introModal = new bootstrap.Modal(document.getElementById('testIntroModal'));
    submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
    
    document.getElementById('introSubjectName').textContent = currentSubject;
    document.getElementById('introStudentName').textContent = currentUser.name;
    document.getElementById('introSetNum').textContent = currentUser.assignedSet;
    
    document.getElementById('headerSubject').textContent = currentSubject + ' Assessment';
    document.getElementById('headerStudent').textContent = currentUser.name;
    document.getElementById('headerRoll').textContent = currentUser.rollNumber;

    // Check for existing session
    const session = StorageUtils.getTestSession(currentUser.rollNumber, currentSubject);
    
    if (session) {
        // Resume session quietly without modal
        answers = session.answers || {};
        states = session.states || {};
        currentQuestionIndex = session.currentIndex || 0;
        
        loadQuestions(currentUser.assignedSet, async () => {
            if (typeof initProctoring === 'function') {
                const isReady = await initProctoring();
                if (!isReady) return; // Stop initialization
            }
            document.getElementById('mainTestUI').style.display = 'block';
            startTimer(session.remainingSeconds);
            renderPalette();
            showQuestion(currentQuestionIndex);
        });
    } else {
        // New session, show instructions
        introModal.show();
        
        document.getElementById('btnStartTest').addEventListener('click', () => {
            introModal.hide();
            loadQuestions(currentUser.assignedSet, async () => {
                if (typeof initProctoring === 'function') {
                    const isReady = await initProctoring();
                    if (!isReady) return; // Stop initialization
                }
                document.getElementById('mainTestUI').style.display = 'block';
                startTimer();
                renderPalette();
                showQuestion(0);
            });
        });
    }

    // Bind navigation buttons
    document.getElementById('btnPrev').addEventListener('click', () => {
        saveCurrentAnswer();
        if (currentQuestionIndex > 0) showQuestion(currentQuestionIndex - 1);
    });
    
    document.getElementById('btnNext').addEventListener('click', () => {
        saveCurrentAnswer();
        if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
            showQuestion(currentQuestionIndex + 1);
        } else {
            // End of test reached
            renderPalette();
        }
    });

    document.getElementById('btnMarkReview').addEventListener('click', () => {
        const markBtn = document.getElementById('btnMarkReview');
        if (states[currentQuestionIndex] === 'marked') {
            states[currentQuestionIndex] = 'visited';
            markBtn.textContent = 'Mark for Review';
            markBtn.classList.replace('btn-warning', 'btn-outline-warning');
            markBtn.classList.remove('text-dark');
        } else {
            states[currentQuestionIndex] = 'marked';
            markBtn.textContent = 'Unmark';
            markBtn.classList.replace('btn-outline-warning', 'btn-warning');
            markBtn.classList.add('text-dark');
        }
        saveCurrentAnswer(); // this triggers state save
        renderPalette();
    });

    document.getElementById('btnSubmitTest').addEventListener('click', prepareSubmit);
    document.getElementById('confirmSubmitBtn').addEventListener('click', submitTest);
}

function loadQuestions(setNum, callback) {
    const dataObjName = currentSubject.toLowerCase() + 'Questions';
    
    if (window[dataObjName] && window[dataObjName][`set${setNum}`]) {
        // Clone to avoid modifying global object directly
        questions = JSON.parse(JSON.stringify(window[dataObjName][`set${setNum}`]));
        
        // Seeded shuffle based on rollNumber + subject + setNum
        const seedStr = `${currentUser.rollNumber}_${currentSubject}_${setNum}`;
        let seed = 0;
        for (let i = 0; i < seedStr.length; i++) {
            seed = seedStr.charCodeAt(i) + ((seed << 5) - seed);
        }
        
        // Simple seeded random generator
        const random = () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };
        
        // Fisher-Yates shuffle using seeded random
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        if (callback) callback();
    } else {
        alert("Question bank data missing for " + currentSubject + " Set " + setNum);
        window.location.href = 'dashboard.html';
    }
}

function startTimer(resumeSeconds = null) {
    const timerDisplay = document.getElementById('timerDisplay');
    
    timer = new TestTimer(TEST_DURATION_MINS, (remaining, display) => {
        timerDisplay.textContent = display;
        
        // Warnings
        if (remaining === 10 * 60) {
            timerDisplay.parentElement.classList.replace('bg-danger', 'bg-warning');
            timerDisplay.parentElement.classList.replace('text-white', 'text-dark');
        } else if (remaining === 5 * 60) {
            timerDisplay.parentElement.classList.replace('bg-warning', 'bg-danger');
            timerDisplay.parentElement.classList.add('text-white');
            timerDisplay.parentElement.classList.add('animate__animated', 'animate__flash'); // if animate.css was added
        }
        
        // Auto save session periodically (every 10s)
        if (remaining % 10 === 0) {
            saveSession();
        }
    }, () => {
        // Time up
        submitModal.hide();
        saveCurrentAnswer();
        alert("Time is up! Your assessment will be submitted automatically.");
        submitTest();
    });
    
    timer.start(resumeSeconds);
}

function renderPalette() {
    const container = document.getElementById('paletteContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.textContent = i + 1;
        
        // State classes
        if (i === currentQuestionIndex) btn.classList.add('active-q');
        
        if (answers[i]) {
            btn.classList.add('answered');
            if (states[i] === 'marked') btn.classList.replace('answered', 'marked'); // marked overrides color but it's answered
        } else if (states[i] === 'marked') {
            btn.classList.add('marked');
        } else if (states[i] === 'visited') {
            btn.classList.add('visited');
        }
        
        btn.addEventListener('click', () => {
            saveCurrentAnswer();
            showQuestion(i);
        });
        
        container.appendChild(btn);
    }
}

function showQuestion(index) {
    if (index < 0 || index >= TOTAL_QUESTIONS) return;
    
    currentQuestionIndex = index;
    if (!states[index] && states[index] !== 'marked') {
        states[index] = 'visited';
    }
    
    const q = questions[index];
    document.getElementById('currentQNum').textContent = index + 1;
    
    // Escape HTML tags in question text to prevent them from rendering as hidden elements
    const escapedQuestion = q.question.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let html = `<div class="fw-bold mb-3">${escapedQuestion}</div>`;
    
    if (q.codeSnippet) {
        // Simple HTML escaping for display
        const escapedCode = q.codeSnippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        html += `<div class="question-code-block">${escapedCode}</div>`;
    }
    
    document.getElementById('questionContent').innerHTML = html;
    
    const optsContainer = document.getElementById('optionsContainer');
    optsContainer.innerHTML = '';
    
    // Type checking for future extensions (practical inside test, etc)
    // Currently handling multiple choice / objective code selection
    if (q.options) {
        q.options.forEach((opt, i) => {
            const optId = `opt_${i}`;
            const isChecked = answers[index] === opt ? 'checked' : '';
            
            const div = document.createElement('div');
            // Escaping option text if it contains HTML tags
            const escapedOpt = opt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            
            div.innerHTML = `
                <input type="radio" name="qOption" id="${optId}" value="${i}" class="d-none option-input" ${isChecked}>
                <label for="${optId}" class="option-label">
                    <span class="fw-bold me-2">${String.fromCharCode(65 + i)}.</span> ${escapedOpt}
                </label>
            `;
            optsContainer.appendChild(div);
        });
    }

    // Button states
    document.getElementById('btnPrev').disabled = (index === 0);
    document.getElementById('btnNext').textContent = (index === TOTAL_QUESTIONS - 1) ? 'Save' : 'Save & Next';
    
    const markBtn = document.getElementById('btnMarkReview');
    if (states[index] === 'marked') {
        markBtn.textContent = 'Unmark';
        markBtn.classList.remove('btn-outline-warning');
        markBtn.classList.add('btn-warning', 'text-dark');
    } else {
        markBtn.textContent = 'Mark for Review';
        markBtn.classList.remove('btn-warning', 'text-dark');
        markBtn.classList.add('btn-outline-warning');
    }
    
    renderPalette();
    saveSession();
}

function saveCurrentAnswer() {
    const selected = document.querySelector('input[name="qOption"]:checked');
    if (selected) {
        const optIndex = parseInt(selected.value);
        answers[currentQuestionIndex] = questions[currentQuestionIndex].options[optIndex];
        // If answered, remove visited status to show green, unless marked
        if (states[currentQuestionIndex] === 'visited') {
            states[currentQuestionIndex] = 'answered';
        }
    }
    saveSession();
}

function saveSession() {
    const remaining = timer ? timer.getRemainingSeconds() : 0;
    StorageUtils.saveTestSession(currentUser.rollNumber, currentSubject, {
        answers: answers,
        states: states,
        currentIndex: currentQuestionIndex,
        remainingSeconds: remaining
    });
}

function prepareSubmit() {
    saveCurrentAnswer();
    
    const answeredCount = Object.keys(answers).length;
    const unansweredCount = TOTAL_QUESTIONS - answeredCount;
    
    document.getElementById('summaryAnswered').textContent = answeredCount;
    document.getElementById('summaryUnanswered').textContent = unansweredCount;
    
    submitModal.show();
}

async function submitTest(isAutoSubmit = false) {
    if (isSubmitting) return; // Prevent double submission
    isSubmitting = true;
    
    if (timer) timer.stop();
    if (submitModal) submitModal.hide();
    
    // Save current answer if not already saved
    if (!isAutoSubmit) {
        const selected = document.querySelector('input[name="qOption"]:checked');
        if (selected) {
            const optIndex = parseInt(selected.value);
            answers[currentQuestionIndex] = questions[currentQuestionIndex].options[optIndex];
        }
    }
    
    // Calculate score
    let correctCount = 0;
    const evaluation = []; // Store review data for later if passed
    
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const q = questions[i];
        const studentAns = answers[i] || null;
        const isCorrect = studentAns === q.correctAnswer;
        
        if (isCorrect) correctCount++;
        
        evaluation.push({
            questionId: q.id,
            questionText: q.question,
            codeSnippet: q.codeSnippet,
            studentAnswer: studentAns,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            isCorrect: isCorrect
        });
    }
    
    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    const isPass = percentage >= 75;
    const status = isPass ? 'passed' : 'failed';
    
    // Update Progress
    const progress = StorageUtils.getProgress(currentUser.rollNumber);
    progress.subjects[currentSubject].score = correctCount;
    progress.subjects[currentSubject].percentage = percentage;
    progress.subjects[currentSubject].status = status;
    
    if (isPass) {
        progress.subjects[currentSubject].practical = 'unlocked';
    }
    
    StorageUtils.saveProgress(currentUser.rollNumber, progress);
    
    // Save to Firebase Admin Dashboard and wait for it
    if (typeof saveScoreToFirebase === 'function') {
        try {
            await saveScoreToFirebase(currentUser.rollNumber, currentUser.name, currentSubject, correctCount, percentage, status);
        } catch (e) {
            console.error(e);
        }
    }
    
    // Save evaluation result payload specifically for result page
    const resultPayload = {
        subject: currentSubject,
        correct: correctCount,
        wrong: TOTAL_QUESTIONS - correctCount - (TOTAL_QUESTIONS - Object.keys(answers).length),
        unanswered: TOTAL_QUESTIONS - Object.keys(answers).length,
        percentage: percentage,
        status: status,
        evaluation: evaluation // Answer key review
    };
    
    localStorage.setItem(StorageUtils.getUserKey(currentUser.rollNumber, `result_${currentSubject}`), JSON.stringify(resultPayload));
    
    // Clear active session
    StorageUtils.clearTestSession(currentUser.rollNumber, currentSubject);
    
    // Redirect to Result
    window.location.href = `result.html?subject=${currentSubject}`;
}
