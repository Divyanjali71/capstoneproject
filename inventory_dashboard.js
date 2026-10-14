// =====================================================================
// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// Run in the browser console (uses prompt()). Open the console, paste, run.
// =====================================================================

// ---------- 1. Data & Input Initialization ----------
console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- 2. Control Flow: validation & category badges ----------
function validateProduct(name, price) {
  if (name === null || name.trim() === "") {
    return "Product name is missing.";
  } else if (Number.isNaN(price)) {
    return "Price must be a number.";
  } else if (price <= 0) {
    return "Price must be greater than zero.";
  }
  return null; // null means valid
}

function getCategory(price) {
  // switch(true) lets each case test a price threshold
  switch (true) {
    case price < 50:
      return "Budget";
    case price <= 500:
      return "Standard";
    default:
      return "Premium";
  }
}

// ---------- 3. Loops & Flow Control: input retry, duplicate search ----------
const MAX_ATTEMPTS = 3;

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const rawName = prompt("Enter new product name:", "Monitor");
  const rawPrice = prompt("Enter product price:", "150");

  if (rawName === null || rawPrice === null) {   // user pressed Cancel
    console.log("Input cancelled. Continuing with existing inventory.");
    break;
  }

  const name = rawName.trim();
  const price = Number(rawPrice);                // explicit type conversion

  const error = validateProduct(name, price);
  if (error) {
    console.log(`Attempt ${attempt}/${MAX_ATTEMPTS}: ${error}`);
    continue;                                    // bad input -> try again
  }

  // search for a duplicate before adding
  let duplicate = false;
  for (const item of inventory) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      duplicate = true;
      break;
    }
  }
  if (duplicate) {
    console.log(`Attempt ${attempt}/${MAX_ATTEMPTS}: "${name}" already exists.`);
    continue;
  }

  inventory.push({ name, price });
  console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);
  break;                                         // valid input -> done
}

// ---------- 4. Functions & Scope ----------
// Regular function: total inventory value
function calculateTotal(items) {
  let total = 0;                                 // local scope, not leaked
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// Arrow function: apply custom tax and discount (percentages)
const applyAdjustments = (price, taxPercent = 0, discountPercent = 0) =>
  price * (1 - discountPercent / 100) * (1 + taxPercent / 100);

// ---------- 5. Array Methods ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

const affordable = inventory
  .filter((item) => item.price < 200)
  .map((item) => item.name);
console.log("Filtered Affordable Items (Under $200):", affordable);

const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:", report);

// ---------- Bonus: tax / discount demo ----------
console.log("\n--- Bonus: Price after 18% tax and 10% discount ---");
inventory.forEach((item) => {
  console.log(`${item.name}: $${applyAdjustments(item.price, 18, 10).toFixed(2)}`);
});
