/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here

  let totalPrice = 0;
  switch (size) {
    case "small":
      switch (type) {
        case "regular":
          totalPrice = 3;
          break;
        case "latte":
          totalPrice = 4;
          break;
        case "cappuccino":
          totalPrice = 4.5;
          break;
        case "mocha":
          totalPrice = 5;
          break;
        default:
          return -1;
      }
      break;

    case "medium":
      switch (type) {
        case "regular":
          totalPrice = 4;
          break;
        case "latte":
          totalPrice = 5;
          break;
        case "cappuccino":
          totalPrice = 5.5;
          break;
        case "mocha":
          totalPrice = 6;
          break;
        default:
          return -1;
      }
      break;

    case "large":
      switch (type) {
        case "regular":
          totalPrice = 5;
          break;
        case "latte":
          totalPrice = 6;
          break;
        case "cappuccino":
          totalPrice = 6.5;
          break;
        case "mocha":
          totalPrice = 7;
          break;
        default:
          return -1;
      }
      break;

    default:
      return -1;
  }

  totalPrice += extras.whippedCream ? 0.5 : 0;
  totalPrice += extras.extraShot ? 0.75 : 0;
  return totalPrice;
  // lookup table
  //   const prices = {
  //     small: { regular: 3, latte: 4, cappuccino: 4.5, mocha: 5 },
  //     medium: { regular: 4, latte: 5, cappuccino: 5.5, mocha: 6 },
  //     large: { regular: 5, latte: 6, cappuccino: 6.5, mocha: 7 },
  //   };

  //   if (!prices[size] || !prices[size][type]) {
  //     return -1;
  //   }
  //   let total = prices[size][type];

  //   total += extras.whippedCream ? 0.5 : 0;
  //   total += extras.extraShot ? 0.75 : 0;

  //   return total;
}
