// Initialize resources
let food = 0;
let water = 0;
let energy = 0;
const maxFood = 10;
const maxWater = 10;
const maxEnergy = 100;

// Sync initial resource values with the HTML display
updateDisplay();

// Function to update the display
function updateDisplay() {
  // Update food gauge
  const foodBar = document.getElementById("food-bar");
  const foodPercentage = (food / maxFood) * 100;
  foodBar.style.width = `${foodPercentage}%`;
  foodBar.style.backgroundColor = foodPercentage > 50 ? "green" : foodPercentage > 10 ? "yellow" : "red";

  // Update water gauge
  const waterBar = document.getElementById("water-bar");
  const waterPercentage = (water / maxWater) * 100;
  waterBar.style.width = `${waterPercentage}%`;
  waterBar.style.backgroundColor = waterPercentage > 50 ? "green" : waterPercentage > 10 ? "yellow" : "red";

  // Update energy gauge
  const energyBar = document.getElementById("energy-bar");
  const energyPercentage = (energy / maxEnergy) * 100;
  energyBar.style.width = `${energyPercentage}%`;
  energyBar.style.backgroundColor = energyPercentage > 50 ? "green" : energyPercentage > 10 ? "yellow" : "red";

  // Change the "rest" button color based on energy level
  const restButton = document.getElementById("restButton");
  if (energy >= maxEnergy) {
    restButton.classList.add("red"); // Add the red class
    restButton.disabled = true; // Disable the button if energy is full
  } else {
    restButton.classList.remove("red"); // Remove the red class
    restButton.disabled = false;
  }
}

// Function to gather food
function gatherFood() {
  if (food < maxFood) {
    food += 1; // Increase food count
    updateDisplay();
    console.log("Gathered food! Current food:", food);
  } else {
    console.log("Food is full!");
  }
}

// Function to drink water
function drinkWater() {
  if (water < maxWater) {
    water += 1; // Increase water count
    updateDisplay();
    console.log("Drank water! Current water:", water);
  } else {
    console.log("Water is full!");
  }
}

// Function to rest and regain energy
function rest() {
  if (energy < maxEnergy) { // Limit energy to maxEnergy
    energy += 10; // Regain 10 energy per rest
    if (energy > maxEnergy) energy = maxEnergy; // Cap energy at max
    updateDisplay();
    console.log("Rested! Current energy:", energy);
  }
}

// Function to decrease energy over time
function decreaseEnergy() {
  if (energy > 0) {
    energy -= 1; // Decrease energy by 1
    updateDisplay();
    console.log("Energy decreased. Current energy:", energy);
  }
}

// Start the energy drain
setInterval(decreaseEnergy, 1000); // Decrease energy every 1 second

// Update the display when the game starts
updateDisplay();
