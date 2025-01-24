// Initialize resources
let food = 0;
let water = 0;
let energy = 0;
const maxFood = 10;
const maxWater = 10;
const maxEnergy = 100;

// Function to update the display
function updateDisplay() {
  // Update food gauge
  const foodBar = document.getElementById("food-bar");
  const foodPercentage = (food / maxFood) * 100;
  foodBar.style.width = `${foodPercentage}%`;
  foodBar.style.backgroundColor = foodPercentage > 50 ? "green" : foodPercentage > 10 ? "yellow" : "red";
  document.getElementById("food-indicator").textContent = `${food}/${maxFood}`;

  // Update water gauge
  const waterBar = document.getElementById("water-bar");
  const waterPercentage = (water / maxWater) * 100;
  waterBar.style.width = `${waterPercentage}%`;
  waterBar.style.backgroundColor = waterPercentage > 50 ? "green" : waterPercentage > 10 ? "yellow" : "red";
  document.getElementById("water-indicator").textContent = `${water}/${maxWater}`;

  // Update energy gauge
  const energyBar = document.getElementById("energy-bar");
  const energyPercentage = (energy / maxEnergy) * 100;
  energyBar.style.width = `${energyPercentage}%`;
  energyBar.style.backgroundColor = energyPercentage > 50 ? "green" : energyPercentage > 10 ? "yellow" : "red";
  document.getElementById("energy-indicator").textContent = `${energy}/${maxEnergy}`;

  // Update rest button state
  const restButton = document.getElementById("restButton");
  if (energy >= maxEnergy) {
    restButton.classList.add("red");
    restButton.disabled = true;
  } else {
    restButton.classList.remove("red");
    restButton.disabled = false;
  }
}

// Function to gather food
function gatherFood() {
  if (food < maxFood) {
    food += 1;
    updateDisplay();
    console.log("Gathered food! Current food:", food);
  }
}

// Function to drink water
function drinkWater() {
  if (water < maxWater) {
    water += 1;
    updateDisplay();
    console.log("Drank water! Current water:", water);
  }
}

// Function to rest and regain energy
function rest() {
  if (energy < maxEnergy) {
    energy += 10;
    if (energy > maxEnergy) energy = maxEnergy;
    updateDisplay();
    console.log("Rested! Current energy:", energy);
  }
}

// Function to decrease energy over time
function decreaseEnergy() {
  if (energy > 0) {
    energy -= 1;
    updateDisplay();
    console.log("Energy decreased. Current energy:", energy);
  }
}

// Start the energy drain
setInterval(decreaseEnergy, 1000); // Decrease energy every 1 second

// Initialize the display
updateDisplay();
