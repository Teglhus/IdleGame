// Initialize resources
let food = 10;
let water = 10;
let energy = 10;

// Function to gather food
function gatherFood() {
  food += 1; // Increase food count
  document.getElementById("food").textContent = food; // Update display
  console.log("Gathered food! Current food:", food);
}

// Function to drink water
function drinkWater() {
  if (water > 0) {
    water -= 1; // Decrease water count
    document.getElementById("water").textContent = water; // Update display
    console.log("Drank water! Current water:", water);
  } else {
    alert("No water left!");
  }
}

// Function to rest and regain energy
function rest() {
  if (energy < 10) {
    energy += 1; // Increase energy count
    document.getElementById("energy").textContent = energy; // Update display
    console.log("Rested! Current energy:", energy);
  } else {
    alert("Energy is already full!");
  }
}