let darkMode = false;
let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Dark Mode Toggle
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
}

// Simulated Login System
function showLogin() {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserStatus();
    } else {
        alert('Login failed. Please check your username and password.');
    }
}

function showSignup() {
    const username = prompt('Choose a username:');
    const password = prompt('Choose a password:');
    
    if (username && password) {
        const newUser = { username, password, progress: {} };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! You can now log in.');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserStatus();
}

// Update user status display
function updateUserStatus() {
    const userStatus = document.getElementById('user-status');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (currentUser) {
        userStatus.textContent = `Logged in as ${currentUser.username}`;
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        userStatus.textContent = 'Not logged in';
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

// Load tiers and lessons dynamically
function loadTier(tier) {
    const lessons = {
        1: { title: 'HTML5 Basics (Tier 1)', body: 'Level 1: Understanding HTML5 structure and basic tags. Level 2: Links and Lists.' },
        2: { title: 'Media and Tables (Tier 2)', body: 'Level 3: Working with images, videos, and audio. Level 4: Creating tables.' },
        3: { title: 'Forms and Inputs (Tier 3)', body: 'Level 5: Basic form elements and input types. Level 6: Advanced form elements.' },
        4: { title: 'Semantics and Structure (Tier 4)', body: 'Level 7: Semantic HTML elements. Level 8: Structural elements for better layout.' },
        5: { title: 'Multimedia and Graphics (Tier 5)', body: 'Level 9: Canvas and drawing shapes. Level 10: Embedding multimedia content.' }
    };

    const tierContent = lessons[tier];
    
    if (tierContent) {
        document.getElementById('tier-selection').style.display = 'none';
        document.getElementById('lesson-content').style.display = 'block';
        document.getElementById('lesson-title').textContent = tierContent.title;
        document.getElementById('lesson-body').textContent = tierContent.body;
    }
}

function goBackToTiers() {
    document.getElementById('tier-selection').style.display = 'block';
    document.getElementById('lesson-content').style.display = 'none';
}

// Initialize app
function initApp() {
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    updateUserStatus();
}

document.addEventListener('DOMContentLoaded', initApp);
