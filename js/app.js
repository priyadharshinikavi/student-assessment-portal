// js/app.js

// Auth Guard: Redirect to login if not logged in
function checkAuth() {
    const user = StorageUtils.getCurrentUser();
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!user && currentPage !== 'login.html') {
        window.location.href = 'login.html';
        return false;
    }
    if (user && (currentPage === 'login.html' || currentPage === 'index.html' || currentPage === '')) {
        window.location.href = 'dashboard.html';
        return false;
    }
    return user;
}

// Global Document Ready setup
document.addEventListener('DOMContentLoaded', () => {
    // Disable right click (Optional, for simple test protection)
    // document.addEventListener('contextmenu', event => event.preventDefault());
    
    // Prevent common shortcuts
    document.addEventListener('keydown', (e) => {
        // if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'p')) {
        //     e.preventDefault();
        // }
    });
});
