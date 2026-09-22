// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    const loginForm = document.getElementById('loginForm');
    const rollSelect = document.getElementById('rollNumber');
    
    // Populate roll numbers (101-130)
    if (rollSelect) {
        for (let i = 101; i <= 130; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            rollSelect.appendChild(option);
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('studentName').value.trim();
            const rollNumber = document.getElementById('rollNumber').value;
            const errorDiv = document.getElementById('loginError');
            
            if (!name || !rollNumber) {
                errorDiv.textContent = "Please fill in all fields.";
                errorDiv.style.display = 'block';
                return;
            }
            
            const rollInt = parseInt(rollNumber);
            if (isNaN(rollInt) || rollInt < 101 || rollInt > 130) {
                errorDiv.textContent = "Please enter a valid roll number between 101 and 130.";
                errorDiv.style.display = 'block';
                return;
            }

            // Calculate assigned set deterministic
            const assignedSet = ((rollInt - 101) % 10) + 1;
            
            const user = {
                name: name,
                rollNumber: rollInt,
                assignedSet: assignedSet
            };
            
            // Set session
            StorageUtils.setCurrentUser(user);
            
            // Initialize progress if it doesn't exist
            let progress = StorageUtils.getProgress(rollInt);
            if (!progress) {
                progress = StorageUtils.getInitialProgress(rollInt);
                progress.name = name; // store name in progress too
                StorageUtils.saveProgress(rollInt, progress);
            } else if (!progress.assignedSet) {
                // Backward compatibility fix just in case
                progress.assignedSet = assignedSet;
                StorageUtils.saveProgress(rollInt, progress);
            }
            
            window.location.href = 'dashboard.html';
        });
    }
});

function handleLogout() {
    StorageUtils.logout();
    window.location.href = 'login.html';
}
