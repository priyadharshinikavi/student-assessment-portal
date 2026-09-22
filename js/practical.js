// js/practical.js

let currentUser = null;
let currentSubject = null;
let taskData = null;
let timer = null;
let submitModal = null;

const PRACTICAL_DURATION_MINS = 90;

document.addEventListener('DOMContentLoaded', () => {
    currentUser = checkAuth();
    if (!currentUser) return;

    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject');
    
    if (!currentSubject) {
        window.location.href = 'dashboard.html';
        return;
    }

    const progress = StorageUtils.getProgress(currentUser.rollNumber);
    if (!progress || !progress.subjects[currentSubject] || progress.subjects[currentSubject].practical !== 'unlocked') {
        alert("This practical task is not unlocked yet.");
        window.location.href = 'dashboard.html';
        return;
    }

    initPracticalSetup();
});

function initPracticalSetup() {
    submitModal = new bootstrap.Modal(document.getElementById('submitPracticalModal'));
    
    document.getElementById('navBrand').textContent = `${currentSubject} Practical Task`;
    document.getElementById('studentInfo').textContent = `${currentUser.name} (Roll: ${currentUser.rollNumber})`;
    
    // Load Data
    const dataObjName = currentSubject.toLowerCase() + 'Practical';
    if (window[dataObjName] && window[dataObjName][`set${currentUser.assignedSet}`]) {
        taskData = window[dataObjName][`set${currentUser.assignedSet}`];
        renderTaskDetails();
    } else {
        alert("Practical task data missing for " + currentSubject + " Set " + currentUser.assignedSet);
        window.location.href = 'dashboard.html';
        return;
    }

    // Auto load previous code if any
    const savedCode = localStorage.getItem(`student_${currentUser.rollNumber}_practical_${currentSubject}`);
    if (savedCode) {
        const parsed = JSON.parse(savedCode);
        document.getElementById('htmlEditor').value = parsed.html || '';
        document.getElementById('cssEditor').value = parsed.css || '';
        document.getElementById('jsEditor').value = parsed.js || '';
    } else {
        document.getElementById('htmlEditor').value = taskData.starterHtml || '';
        document.getElementById('cssEditor').value = taskData.starterCss || '';
        document.getElementById('jsEditor').value = taskData.starterJs || '';
    }

    runPreview();

    // Event Listeners
    document.getElementById('btnRunCode').addEventListener('click', runPreview);
    
    // Auto run and save on keyup (debounced)
    let timeout = null;
    const editors = document.querySelectorAll('.code-textarea');
    editors.forEach(editor => {
        editor.addEventListener('keyup', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                runPreview();
                saveCodeLocally();
            }, 1000);
        });
    });

    document.getElementById('btnSubmitPractical').addEventListener('click', () => submitModal.show());
    document.getElementById('confirmSubmitPractical').addEventListener('click', submitPractical);

    // Timer
    const timerDisplay = document.getElementById('practicalTimer');
    timer = new TestTimer(PRACTICAL_DURATION_MINS, (remaining, display) => {
        timerDisplay.textContent = display;
    }, () => {
        submitModal.hide();
        alert("Time is up! Submitting task automatically.");
        submitPractical();
    });
    timer.start();
}

function renderTaskDetails() {
    document.getElementById('taskTitle').textContent = taskData.title;
    document.getElementById('taskDescription').innerHTML = taskData.description;
    
    const reqList = document.getElementById('reqList');
    reqList.innerHTML = '';
    
    taskData.requirements.forEach(req => {
        const li = document.createElement('li');
        li.className = 'list-group-item px-0 text-sm';
        li.innerHTML = `<i class="bi bi-square text-muted me-2"></i> ${req}`;
        reqList.appendChild(li);
    });
}

function runPreview() {
    const html = document.getElementById('htmlEditor').value;
    const css = `<style>${document.getElementById('cssEditor').value}</style>`;
    const js = `<script>${document.getElementById('jsEditor').value}<\/script>`;
    
    const iframe = document.getElementById('previewFrame');
    iframe.srcdoc = html + css + js;
}

function saveCodeLocally() {
    const code = {
        html: document.getElementById('htmlEditor').value,
        css: document.getElementById('cssEditor').value,
        js: document.getElementById('jsEditor').value
    };
    localStorage.setItem(`student_${currentUser.rollNumber}_practical_${currentSubject}`, JSON.stringify(code));
}

function submitPractical() {
    if (timer) timer.stop();
    submitModal.hide();
    saveCodeLocally();
    
    // Update progress
    const progress = StorageUtils.getProgress(currentUser.rollNumber);
    progress.subjects[currentSubject].practical = 'completed';
    
    // Unlock next subject
    const subjectOrder = ['html', 'css', 'bootstrap', 'javascript', 'jquery'];
    const currentIndex = subjectOrder.indexOf(currentSubject);
    
    if (currentIndex >= 0 && currentIndex < subjectOrder.length - 1) {
        const nextSubj = subjectOrder[currentIndex + 1];
        progress.subjects[nextSubj].status = 'unlocked';
    } else if (currentIndex === subjectOrder.length - 1) {
        progress.courseCompleted = true;
    }
    
    StorageUtils.saveProgress(currentUser.rollNumber, progress);
    
    alert("Practical Task submitted successfully!");
    
    if (progress.courseCompleted) {
        window.location.href = 'completion.html';
    } else {
        window.location.href = 'dashboard.html';
    }
}
