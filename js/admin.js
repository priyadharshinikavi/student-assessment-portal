// js/admin.js

document.addEventListener('DOMContentLoaded', () => {
    // Check if Firebase is initialized
    if (typeof db === 'undefined') {
        document.getElementById('scoresTableBody').innerHTML = '<tr><td colspan="5" class="text-danger text-center">Firebase not configured. Check js/firebase-config.js</td></tr>';
        document.getElementById('logsTableBody').innerHTML = '<tr><td colspan="4" class="text-danger text-center">Firebase not configured. Check js/firebase-config.js</td></tr>';
        return;
    }

    loadScores();
    loadProctorLogs();

    // Filtering logic
    const searchInput = document.getElementById('adminSearchFilter');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase().trim();
            
            // Filter Scores Table
            const scoreRows = document.querySelectorAll('#scoresTableBody tr');
            scoreRows.forEach(row => {
                // If it's the loading/empty row, ignore it
                if (row.cells.length === 1) return;
                
                const rollNo = row.cells[0].textContent.toLowerCase();
                const name = row.cells[1].textContent.toLowerCase();
                
                if (rollNo.includes(filterValue) || name.includes(filterValue)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });

            // Filter Logs Table
            const logRows = document.querySelectorAll('#logsTableBody tr');
            logRows.forEach(row => {
                // If it's the loading/empty row, ignore it
                if (row.cells.length === 1) return;
                
                const rollNo = row.cells[1].textContent.toLowerCase();
                const name = row.cells[2].textContent.toLowerCase();
                
                if (rollNo.includes(filterValue) || name.includes(filterValue)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
});

function loadScores() {
    db.collection("studentScores")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const tbody = document.getElementById('scoresTableBody');
        tbody.innerHTML = '';
        
        if (querySnapshot.empty) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No assessments completed yet.</td></tr>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const badgeClass = data.status === 'passed' ? 'bg-success' : 'bg-danger';
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="fw-semibold text-secondary">${data.rollNumber}</td>
                <td class="fw-medium">${data.studentName}</td>
                <td class="text-capitalize text-muted">${data.subject}</td>
                <td class="fw-bold text-dark">${data.percentage}%</td>
                <td><span class="badge ${badgeClass} rounded-pill px-3 py-2 bg-opacity-75">${data.status.toUpperCase()}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }, (error) => {
        console.error("Error fetching scores: ", error);
        document.getElementById('scoresTableBody').innerHTML = '<tr><td colspan="5" class="text-danger text-center py-4">Error connecting to Firebase Database.</td></tr>';
    });
}

function loadProctorLogs() {
    db.collection("proctorLogs")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const tbody = document.getElementById('logsTableBody');
        tbody.innerHTML = '';
        
        if (querySnapshot.empty) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-4">No security infractions recorded.</td></tr>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const timeStr = data.timestamp ? data.timestamp.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Just now';
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="small text-muted fw-medium">${timeStr}</td>
                <td class="fw-bold text-danger">${data.rollNumber}</td>
                <td class="fw-medium">${data.studentName}</td>
                <td>
                    <div class="d-flex align-items-start">
                        <i class="bi bi-shield-x text-danger mt-1 me-2"></i>
                        <div>
                            <span class="fw-bold text-dark d-block">${data.eventType}</span>
                            <small class="text-muted">${data.description}</small>
                        </div>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }, (error) => {
        console.error("Error fetching logs: ", error);
        document.getElementById('logsTableBody').innerHTML = '<tr><td colspan="4" class="text-danger text-center py-4">Error connecting to Firebase Database.</td></tr>';
    });
}

async function clearHistory() {
    if (!confirm("Are you sure you want to clear ALL assessment history and proctor logs?\n\nThis will permanently delete data from the database and reset all local student progress. This action CANNOT be undone!")) return;

    const btn = document.querySelector('button[onclick="clearHistory()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> Clearing...';
    btn.disabled = true;

    try {
        // Delete Scores
        const scoresSnap = await db.collection("studentScores").get();
        if (!scoresSnap.empty) {
            const batch1 = db.batch();
            scoresSnap.forEach(doc => batch1.delete(doc.ref));
            await batch1.commit();
        }

        // Delete Logs
        const logsSnap = await db.collection("proctorLogs").get();
        if (!logsSnap.empty) {
            const batch2 = db.batch();
            logsSnap.forEach(doc => batch2.delete(doc.ref));
            await batch2.commit();
        }

        // Clear local storage to reset progress for students on this device
        // Keep the adminAuth so the admin doesn't get logged out
        const isAdmin = sessionStorage.getItem('adminAuth');
        localStorage.clear();
        sessionStorage.clear();
        if (isAdmin === 'true') {
            sessionStorage.setItem('adminAuth', 'true');
        }

        alert("History successfully cleared!");
    } catch (err) {
        console.error("Error clearing history:", err);
        alert("Failed to clear history. Check console for details.");
    } finally {
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }
}
