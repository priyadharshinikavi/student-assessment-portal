// js/result.js

document.addEventListener('DOMContentLoaded', () => {
    const user = checkAuth();
    if (!user) return;

    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    
    if (!subject) {
        window.location.href = 'dashboard.html';
        return;
    }

    const resultKey = StorageUtils.getUserKey(user.rollNumber, `result_${subject}`);
    const resultDataStr = localStorage.getItem(resultKey);
    
    if (!resultDataStr) {
        alert("No recent result found for this subject.");
        window.location.href = 'dashboard.html';
        return;
    }

    const resultData = JSON.parse(resultDataStr);
    
    // Populate Student Details
    document.getElementById('resName').textContent = user.name;
    document.getElementById('resRoll').textContent = user.rollNumber;
    document.getElementById('resSubject').textContent = subject;
    document.getElementById('resSet').textContent = user.assignedSet;
    
    // Populate Score
    document.getElementById('resCorrect').textContent = resultData.correct;
    document.getElementById('resWrong').textContent = resultData.wrong;
    document.getElementById('resUnanswered').textContent = resultData.unanswered;
    document.getElementById('resPercentage').textContent = resultData.percentage + '%';
    
    const header = document.getElementById('resultHeader');
    const statusText = document.getElementById('resStatusText');
    const btnContainer = document.getElementById('actionButtons');
    
    if (resultData.status === 'passed') {
        header.classList.add('bg-success', 'text-white');
        statusText.textContent = 'STATUS: PASS';
        statusText.className = 'mt-2 text-success fw-bold';
        
        btnContainer.innerHTML = `
            <a href="dashboard.html" class="btn btn-outline-secondary px-4">Dashboard</a>
            <button class="btn btn-outline-primary px-4" id="btnViewAnswers">View Answers</button>
            <a href="practical.html?subject=${subject}" class="btn btn-success px-4">Continue to Practical Task</a>
        `;
        
        document.getElementById('btnViewAnswers').addEventListener('click', () => {
            renderReview(resultData.evaluation);
            document.getElementById('reviewSection').style.display = 'block';
            document.getElementById('reviewSection').scrollIntoView({ behavior: 'smooth' });
        });
        
    } else {
        header.classList.add('bg-danger', 'text-white');
        statusText.textContent = 'STATUS: FAIL';
        statusText.className = 'mt-2 text-danger fw-bold';
        document.getElementById('failMessage').style.display = 'block';
        
        btnContainer.innerHTML = `
            <a href="dashboard.html" class="btn btn-outline-secondary px-4">Dashboard</a>
            <a href="test.html?subject=${subject}" class="btn btn-primary px-4">Retake Test</a>
        `;
    }
});

function renderReview(evaluationArray) {
    const container = document.getElementById('reviewContainer');
    container.innerHTML = '';
    
    evaluationArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `card mb-4 border-${item.isCorrect ? 'success' : 'danger'}`;
        
        let codeHtml = '';
        if (item.codeSnippet) {
            const escapedCode = item.codeSnippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            codeHtml = `<div class="bg-dark text-light p-3 rounded mb-3 font-monospace small" style="white-space: pre-wrap;">${escapedCode}</div>`;
        }
        
        const studentAnsEscaped = item.studentAnswer ? item.studentAnswer.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '<em>Not Answered</em>';
        const correctAnsEscaped = item.correctAnswer.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        card.innerHTML = `
            <div class="card-header ${item.isCorrect ? 'bg-success text-white' : 'bg-danger text-white'}">
                <strong>Question ${index + 1}</strong>
                <span class="float-end"><i class="bi ${item.isCorrect ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}"></i> ${item.isCorrect ? 'Correct' : 'Wrong'}</span>
            </div>
            <div class="card-body">
                <p class="fs-5">${item.questionText}</p>
                ${codeHtml}
                
                <div class="row mt-3">
                    <div class="col-md-6 mb-2">
                        <div class="p-2 border rounded ${item.isCorrect ? 'bg-success bg-opacity-10 border-success' : 'bg-danger bg-opacity-10 border-danger'}">
                            <small class="text-muted d-block mb-1">Your Answer:</small>
                            <strong>${studentAnsEscaped}</strong>
                        </div>
                    </div>
                    <div class="col-md-6 mb-2">
                        <div class="p-2 border rounded bg-success bg-opacity-10 border-success">
                            <small class="text-muted d-block mb-1">Correct Answer:</small>
                            <strong>${correctAnsEscaped}</strong>
                        </div>
                    </div>
                </div>
                
                ${item.explanation ? `
                <div class="alert alert-info mt-3 mb-0">
                    <strong>Explanation:</strong> ${item.explanation}
                </div>` : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
}
