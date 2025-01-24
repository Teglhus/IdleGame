// Initialize resources
let food = 10;
let water = 10;
let energy = 100;
const maxEnergy = 100;

// Sync initial resource values with the HTML display
document.getElementById("food").textContent = `${food}`;
document.getElementById("water").textContent = `${water}`;

// Function to update the display
function updateDisplay() {
  document.getElementById("food").textContent = `${food}`;
  document.getElementById("water").textContent = `${water}`;

  // Update the energy gauge
  const energyBar = document.getElementById("energy-bar");
  const energyPercentage = (energy / maxEnergy) * 100;
  energyBar.style.width = `${energyPercentage}%`;

  // Change the color of the energy gauge based on energy level
  if (energyPercentage > 50) {
    energyBar.style.backgroundColor = "green";
  } else if (energyPercentage > 10) {
    energyBar.style.backgroundColor = "yellow";
  } else {
    energyBar.style.backgroundColor = "red";
  }

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
  food += 1; // Increase food count
  updateDisplay();
  console.log("Gathered food! Current food:", food);
}

// Function to drink water
function drinkWater() {
  if (water > 0) {
    water -= 1; // Decrease water count
    updateDisplay();
    console.log("Drank water! Current water:", water);
  } else {
    alert("No water left!");
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
