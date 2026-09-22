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

    // Add developer credit footer
    const devFooter = document.createElement('div');
    devFooter.innerHTML = 'Website developed by Priyadharshini Kavi';
    devFooter.style.cssText = 'position: fixed; bottom: 10px; right: 10px; font-size: 12px; color: #6c757d; background: rgba(255,255,255,0.9); padding: 5px 10px; border-radius: 5px; pointer-events: none; z-index: 9999; box-shadow: 0 1px 3px rgba(0,0,0,0.1); font-weight: bold; font-family: sans-serif;';
    document.body.appendChild(devFooter);
});
