let coins = 0;
let autoClickers = 0;
let factories = 0;
let autoClickerCost = 10;
let factoryCost = 100;

// Function to earn coins by clicking the button
function earnCoins() {
    coins += 1;
    updateCoinCount();
}

// Function to update the displayed coin count
function updateCoinCount() {
    document.getElementById('coin-count').innerText = coins;
}

// Function to buy an auto clicker
function buyAutoClicker() {
    if (coins >= autoClickerCost) {
        coins -= autoClickerCost;
        autoClickers += 1;
        autoClickerCost *= 2; // Increase the cost for the next purchase
        updateCoinCount();
    }
}

// Function to buy a factory
function buyFactory() {
    if (coins >= factoryCost) {
        coins -= factoryCost;
        factories += 1;
        factoryCost *= 2; // Increase the cost for the next purchase
        updateCoinCount();
    }
}

// Auto clicker function to automatically earn coins
setInterval(function() {
    coins += autoClickers; // Auto clickers earn 1 coin per second
    coins += factories * 10; // Factories earn 10 coins per second
    updateCoinCount();
}, 1000); // Every second, the auto clickers and factories generate coins
