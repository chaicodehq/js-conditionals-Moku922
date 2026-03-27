/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password !== "string" || password.trim().length === 0)
    return "weak";
  const criteria = {
    0: "weak",
    1: "weak",
    2: "medium",
    3: "medium",
    4: "strong",
    5: "very strong",
  };
  let criteriaMatched = 0;
  if (password.length >= 8) {
    criteriaMatched += 1;
  }
  if (/[a-z]/.test(password)) {
    criteriaMatched += 1;
  }
  if (/[A-Z]/.test(password)) {
    criteriaMatched += 1;
  }
  if (/[0-9]/.test(password)) {
    criteriaMatched += 1;
  }
  if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
    criteriaMatched += 1;
  }
  // if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
  //   criteriaMatched += 1;
  // }
  // console.log(criteria[criteriaMatched]);

  return criteria[criteriaMatched];
}
