// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    const loginForm = document.getElementById('loginForm');
    const rollSelect = document.getElementById('rollNumber');
    const courseSelect = document.getElementById('course');
    
    if (courseSelect && rollSelect) {
        courseSelect.addEventListener('change', (e) => {
            const course = e.target.value;
            rollSelect.innerHTML = '<option value="">Select Roll Number</option>';
            
            if (course) {
                rollSelect.disabled = false;
                let start = 0, end = 0;
                if (course === 'frontend') {
                    start = 101; end = 130;
                } else if (course === 'data_analyst') {
                    start = 1; end = 20;
                }
                
                for (let i = start; i <= end; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    rollSelect.appendChild(option);
                }
            } else {
                rollSelect.disabled = true;
                rollSelect.innerHTML = '<option value="">Select Course First</option>';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('studentName').value.trim();
            const course = document.getElementById('course').value;
            const rollNumber = document.getElementById('rollNumber').value;
            const errorDiv = document.getElementById('loginError');
            
            if (!name || !course || !rollNumber) {
                errorDiv.textContent = "Please fill in all fields.";
                errorDiv.style.display = 'block';
                return;
            }
            
            const rollInt = parseInt(rollNumber);
            let valid = false;
            let assignedSet = 1;
            
            if (course === 'frontend' && rollInt >= 101 && rollInt <= 130) {
                valid = true;
                assignedSet = ((rollInt - 101) % 10) + 1;
            } else if (course === 'data_analyst' && rollInt >= 1 && rollInt <= 20) {
                valid = true;
                assignedSet = rollInt; // 1 to 20 directly maps to set 1 to 20
            }
            
            if (!valid) {
                errorDiv.textContent = "Please enter a valid roll number for the selected course.";
                errorDiv.style.display = 'block';
                return;
            }
            
            const user = {
                name: name,
                rollNumber: rollInt,
                course: course,
                assignedSet: assignedSet
            };
            
            // Set session
            StorageUtils.setCurrentUser(user);
            
            // Initialize progress if it doesn't exist
            let progress = StorageUtils.getProgress(rollInt);
            if (!progress || progress.course !== course) {
                progress = StorageUtils.getInitialProgress(rollInt, course);
                progress.name = name; // store name in progress too
                StorageUtils.saveProgress(rollInt, progress);
            } else if (!progress.assignedSet) {
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
