// js/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const user = checkAuth();
    if (!user) return;

    document.getElementById('navUserInfo').textContent = `${user.name} (${user.rollNumber})`;
    document.getElementById('welcomeMsg').textContent = `Welcome, ${user.name}`;
    document.getElementById('rollMsg').textContent = `Roll Number: ${user.rollNumber} | Assigned Set: ${user.assignedSet}`;

    renderDashboard(user);
});

function renderDashboard(user) {
    const progress = StorageUtils.getProgress(user.rollNumber);
    if (!progress) return;

    const subjectsContainer = document.getElementById('subjectsContainer');
    subjectsContainer.innerHTML = '';

    const subjectConfig = [
        { id: 'html', title: 'HTML Assessment' },
        { id: 'css', title: 'CSS Assessment' },
        { id: 'bootstrap', title: 'Bootstrap Assessment' },
        { id: 'javascript', title: 'JavaScript Assessment' },
        { id: 'jquery', title: 'jQuery Assessment' }
    ];

    subjectConfig.forEach(subj => {
        const subjData = progress.subjects[subj.id];
        
        let statusBadge = '';
        let practicalBadge = '';
        let actionBtn = '';
        let progressHtml = '';

        // Assessment Status
        if (subjData.status === 'locked') {
            statusBadge = `<span class="badge bg-secondary"><i class="bi bi-lock-fill"></i> Locked</span>`;
            progressHtml = `
                <div class="progress mt-2 mb-2" style="height: 10px;">
                    <div class="progress-bar bg-secondary" role="progressbar" style="width: 0%"></div>
                </div>
                <small class="text-muted">Locked</small>
            `;
            actionBtn = `<button class="btn btn-secondary btn-sm w-100" disabled>Locked</button>`;
        } else if (subjData.status === 'unlocked') {
            statusBadge = `<span class="badge bg-primary">In Progress</span>`;
            progressHtml = `
                <div class="progress mt-2 mb-2" style="height: 10px;">
                    <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                </div>
                <small class="text-muted">Not Started</small>
            `;
            actionBtn = `<a href="test.html?subject=${subj.id}" class="btn btn-primary btn-sm w-100">Start Assessment</a>`;
        } else if (subjData.status === 'passed') {
            statusBadge = `<span class="badge bg-success">Passed</span>`;
            progressHtml = `
                <div class="progress mt-2 mb-2" style="height: 10px;">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${subjData.percentage}%"></div>
                </div>
                <small class="text-success">${subjData.percentage}% Score</small>
            `;
            actionBtn = `<a href="result.html?subject=${subj.id}" class="btn btn-outline-success btn-sm w-100 mb-2">View Result</a>`;
            
            // Practical Status
            if (subjData.practical === 'locked') {
                practicalBadge = `<span class="badge bg-secondary"><i class="bi bi-lock-fill"></i> Practical Locked</span>`;
                actionBtn += `<button class="btn btn-secondary btn-sm w-100" disabled>Practical Locked</button>`;
            } else if (subjData.practical === 'unlocked') {
                practicalBadge = `<span class="badge bg-warning text-dark">Practical Pending</span>`;
                actionBtn += `<a href="practical.html?subject=${subj.id}" class="btn btn-warning btn-sm w-100">Start Practical Task</a>`;
            } else if (subjData.practical === 'completed') {
                practicalBadge = `<span class="badge bg-success">Practical Completed</span>`;
                actionBtn += `<button class="btn btn-success btn-sm w-100" disabled>Completed</button>`;
            }
        } else if (subjData.status === 'failed') {
            statusBadge = `<span class="badge bg-danger">Failed</span>`;
            progressHtml = `
                <div class="progress mt-2 mb-2" style="height: 10px;">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${subjData.percentage}%"></div>
                </div>
                <small class="text-danger">${subjData.percentage}% Score - Retake Required</small>
            `;
            actionBtn = `
                <a href="result.html?subject=${subj.id}" class="btn btn-outline-danger btn-sm w-100 mb-2">View Result</a>
                <a href="test.html?subject=${subj.id}" class="btn btn-danger btn-sm w-100">Retake Test</a>
            `;
        }

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-capitalize">${subj.id}</h5>
                    ${statusBadge}
                </div>
                <div class="card-body">
                    <p class="mb-1 text-muted small">50 Questions</p>
                    ${progressHtml}
                    ${practicalBadge ? `<div class="mt-3 border-top pt-2"><p class="mb-1 text-muted small">Practical Task</p>${practicalBadge}</div>` : ''}
                </div>
                <div class="card-footer bg-white border-top-0 pt-0">
                    ${actionBtn}
                </div>
            </div>
        `;
        subjectsContainer.appendChild(card);
    });

    if (progress.courseCompleted) {
        const completeBanner = document.createElement('div');
        completeBanner.className = 'col-12 mt-4';
        completeBanner.innerHTML = `
            <div class="alert alert-success d-flex justify-content-between align-items-center">
                <div>
                    <h4 class="alert-heading mb-1"><i class="bi bi-trophy-fill text-warning"></i> Course Completed!</h4>
                    <p class="mb-0">You have successfully completed all assessments and practical tasks.</p>
                </div>
                <a href="completion.html" class="btn btn-success">View Certificate</a>
            </div>
        `;
        subjectsContainer.prepend(completeBanner);
    }
}
