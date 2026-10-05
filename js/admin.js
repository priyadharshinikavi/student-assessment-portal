// js/admin.js

let allScores = [];
let allLogs = [];
let loginModal = null;

document.addEventListener('DOMContentLoaded', () => {
    // Check if Firebase is initialized
    if (typeof db === 'undefined') {
        document.getElementById('scoresTableBody').innerHTML = '<tr><td colspan="5" class="text-danger text-center">Firebase not configured. Check js/firebase-config.js</td></tr>';
        document.getElementById('logsTableBody').innerHTML = '<tr><td colspan="4" class="text-danger text-center">Firebase not configured. Check js/firebase-config.js</td></tr>';
        return;
    }

    // Initialize Login Modal
    loginModal = new bootstrap.Modal(document.getElementById('adminLoginModal'));
    
    // Check if already authenticated in this session
    if (sessionStorage.getItem('adminAuth') === 'true') {
        document.getElementById('dashboardUI').style.display = 'block';
        initDashboard();
    } else {
        loginModal.show();
    }

    // Login Form Submit Handler
    document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('adminPassword').value;
        const errorEl = document.getElementById('loginError');
        
        if (pwd === 'admin123') { // Default password
            sessionStorage.setItem('adminAuth', 'true');
            errorEl.style.display = 'none';
            loginModal.hide();
            document.getElementById('dashboardUI').style.display = 'block';
            initDashboard();
        } else {
            errorEl.style.display = 'block';
        }
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        renderScores(term);
        renderLogs(term);
    });

    // Clear history
    document.getElementById('btnClearHistory').addEventListener('click', async () => {
        if (confirm("Are you sure you want to permanently delete all assessments and security logs? This action cannot be undone.")) {
            try {
                const btn = document.getElementById('btnClearHistory');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Clearing...';
                btn.disabled = true;

                // Simple way to clear collection client-side (Note: not scalable for large collections, but sufficient for this demo)
                const scoresSnapshot = await db.collection("studentScores").get();
                const scoreDeletions = scoresSnapshot.docs.map(doc => doc.ref.delete());

                const logsSnapshot = await db.collection("proctorLogs").get();
                const logDeletions = logsSnapshot.docs.map(doc => doc.ref.delete());

                await Promise.all([...scoreDeletions, ...logDeletions]);
                
                alert("Dashboard history successfully cleared.");
                btn.innerHTML = originalText;
                btn.disabled = false;
            } catch (err) {
                console.error("Error clearing history:", err);
                alert("An error occurred while clearing history.");
            }
        }
    });
});

function initDashboard() {
    loadScores();
    loadProctorLogs();
}

function loadScores() {
    db.collection("studentScores")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        allScores = [];
        querySnapshot.forEach((doc) => {
            allScores.push(doc.data());
        });
        const term = document.getElementById('searchInput').value.toLowerCase();
        renderScores(term);
    }, (error) => {
        console.error("Error fetching scores: ", error);
        document.getElementById('scoresTableBody').innerHTML = '<tr><td colspan="5" class="text-danger text-center">Error connecting to Firebase Database.</td></tr>';
    });
}

function renderScores(searchTerm = "") {
    const tbody = document.getElementById('scoresTableBody');
    tbody.innerHTML = '';
    
    const filtered = allScores.filter(s => 
        (s.rollNumber && s.rollNumber.toString().includes(searchTerm)) || 
        (s.studentName && s.studentName.toLowerCase().includes(searchTerm))
    );

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No assessments found.</td></tr>';
        return;
    }

    filtered.forEach((data) => {
        const isPassed = data.status === 'passed';
        const badgeClass = isPassed ? 'bg-success bg-opacity-10 text-success border border-success' : 'bg-danger bg-opacity-10 text-danger border border-danger';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="ps-4 text-muted">${data.rollNumber}</td>
            <td class="fw-bold">${data.studentName}</td>
            <td class="text-capitalize">${data.subject}</td>
            <td class="fw-bold">${data.percentage}%</td>
            <td class="pe-4"><span class="badge ${badgeClass} fw-bold" style="font-size: 0.7rem;">${data.status.toUpperCase()}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function loadProctorLogs() {
    db.collection("proctorLogs")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        allLogs = [];
        querySnapshot.forEach((doc) => {
            allLogs.push(doc.data());
        });
        const term = document.getElementById('searchInput').value.toLowerCase();
        renderLogs(term);
    }, (error) => {
        console.error("Error fetching logs: ", error);
        document.getElementById('logsTableBody').innerHTML = '<tr><td colspan="4" class="text-danger text-center">Error connecting to Firebase Database.</td></tr>';
    });
}

function renderLogs(searchTerm = "") {
    const tbody = document.getElementById('logsTableBody');
    tbody.innerHTML = '';
    
    const filtered = allLogs.filter(l => 
        (l.rollNumber && l.rollNumber.toString().includes(searchTerm)) || 
        (l.studentName && l.studentName.toLowerCase().includes(searchTerm))
    );

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No security infractions found.</td></tr>';
        return;
    }

    filtered.forEach((data) => {
        let timeStr = 'Just now';
        if (data.timestamp) {
            const dateObj = data.timestamp.toDate ? data.timestamp.toDate() : new Date(data.timestamp);
            timeStr = dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="ps-4 text-muted small">${timeStr}</td>
            <td class="fw-bold text-danger">${data.rollNumber}</td>
            <td class="fw-bold">${data.studentName}</td>
            <td class="pe-4">
                <div class="d-flex align-items-start">
                    <i class="bi bi-shield-exclamation text-danger me-2 mt-1"></i>
                    <div>
                        <div class="violation-title">${data.eventType}</div>
                        <div class="violation-desc">${data.description}</div>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
