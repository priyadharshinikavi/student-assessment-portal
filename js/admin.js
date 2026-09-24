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
                <td>${data.rollNumber}</td>
                <td>${data.studentName}</td>
                <td class="text-capitalize">${data.subject}</td>
                <td>${data.percentage}%</td>
                <td><span class="badge ${badgeClass}">${data.status.toUpperCase()}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }, (error) => {
        console.error("Error fetching scores: ", error);
        document.getElementById('scoresTableBody').innerHTML = '<tr><td colspan="5" class="text-danger text-center">Error connecting to Firebase Database.</td></tr>';
    });
}

function loadProctorLogs() {
    db.collection("proctorLogs")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const tbody = document.getElementById('logsTableBody');
        tbody.innerHTML = '';
        
        if (querySnapshot.empty) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No security infractions recorded.</td></tr>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const timeStr = data.timestamp ? data.timestamp.toDate().toLocaleTimeString() : 'Just now';
            
            const tr = document.createElement('tr');
            tr.classList.add('table-danger');
            tr.innerHTML = `
                <td class="small">${timeStr}</td>
                <td><strong>${data.rollNumber}</strong></td>
                <td>${data.studentName}</td>
                <td>
                    <span class="fw-bold">${data.eventType}</span><br>
                    <small class="text-muted">${data.description}</small>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }, (error) => {
        console.error("Error fetching logs: ", error);
        document.getElementById('logsTableBody').innerHTML = '<tr><td colspan="4" class="text-danger text-center">Error connecting to Firebase Database.</td></tr>';
    });
}
