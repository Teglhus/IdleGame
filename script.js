// Initialize resources
let food = 10;
let water = 10;
let energy = 10;
const maxEnergy = 100;

// Sync initial resource values with the HTML display
document.getElementById("food").textContent = `${food}`;
document.getElementById("water").textContent = `${water}`;
document.getElementById("energy").textContent = `${energy} / ${maxEnergy}`;

// Function to update the display
function updateDisplay() {
  document.getElementById("food").textContent = `${food}`;
  document.getElementById("water").textContent = `${water}`;
  document.getElementById("energy").textContent = `${energy} / ${maxEnergy}`;

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
    energy += 1; // Increase energy count
    updateDisplay();
    console.log("Rested! Current energy:", energy);
  }
}

// Update the display when the game starts
updateDisplay();
