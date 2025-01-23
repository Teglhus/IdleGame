let resources = {
  food: 10,
  water: 10,
  energy: 10,
};

function updateUI() {
  document.getElementById('food').textContent = resources.food;
  document.getElementById('water').textContent = resources.water;
  document.getElementById('energy').textContent = resources.energy;
}

function gatherFood() {
  resources.food += 1;
  resources.energy -= 1;
  checkGameOver();
  updateUI();
}

function drinkWater() {
  resources.water += 1;
  resources.energy -= 1;
  checkGameOver();
  updateUI();
}

function rest() {
  resources.energy += 2;
  checkGameOver();
  updateUI();
}

function checkGameOver() {
  if (resources.food <= 0 || resources.water <= 0 || resources.energy <= 0) {
    alert('Game Over! Try again.');
    resetGame();
  }
}

function resetGame() {
  resources = { food: 10, water: 10, energy: 10 };
  updateUI();
}

setInterval(() => {
  resources.food -= 1;
  resources.water -= 1;
  updateUI();
}, 5000);

updateUI();