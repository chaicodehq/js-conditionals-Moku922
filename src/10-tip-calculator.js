/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at  the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if (
    billAmount <= 0 ||
    serviceRating < 1 ||
    serviceRating > 5 ||
    !Number.isInteger(serviceRating)
  )
    return null;

  // let tipPercentage = undefined;
  // let tipAmount = undefined;
  // let totalAmount = undefined;

  // if (serviceRating === 5) {
  //   tipPercentage = 25;
  //   tipAmount = (billAmount * tipPercentage) / 100;
  //   totalAmount = billAmount + tipAmount;
  //   console.log(`tipPercentage: ${tipPercentage},
  //   tipAmount: ${tipAmount.toFixed(2)},
  //   totalAmount: ${totalAmount.toFixed(2)}`);
  // } else if (serviceRating === 4) {
  //   tipPercentage = 20;
  //   tipAmount = (billAmount * tipPercentage) / 100;
  //   totalAmount = billAmount + tipAmount;
  // } else if (serviceRating === 3) {
  //   tipPercentage = 15;
  //   tipAmount = (billAmount * tipPercentage) / 100;
  //   totalAmount = billAmount + tipAmount;
  // } else if (serviceRating === 2) {
  //   tipPercentage = 10;
  //   tipAmount = (billAmount * tipPercentage) / 100;
  //   totalAmount = billAmount + tipAmount;
  // } else {
  //   tipPercentage = 5;
  //   tipAmount = (billAmount * tipPercentage) / 100;
  //   totalAmount = billAmount + tipAmount;
  // }
  // return {
  //   tipPercentage: tipPercentage,
  //   tipAmount: tipAmount,
  //   totalAmount: totalAmount,
  // };

  let tipPercentage2;
  if (serviceRating === 1) tipPercentage2 = 5;
  else if (serviceRating === 2) tipPercentage2 = 10;
  else if (serviceRating === 3) tipPercentage2 = 15;
  else if (serviceRating === 4) tipPercentage2 = 20;
  else tipPercentage2 = 25;

  const tipAmount2 = (billAmount * tipPercentage2) / 100;
  return {
    tipPercentage: tipPercentage2,
    tipAmount: Number(tipAmount2.toFixed(2)),
    totalAmount: Number((billAmount + tipAmount2).toFixed(2)),
  };
}
