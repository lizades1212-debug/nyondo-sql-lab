function validateUsername(username) {
  // Reject empty or too short usernames
  if (!username || username.length < 3) {
    return false;
  }
  // Reject usernames with spaces or special characters
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(username);
}

function validatePassword(password) {
  // Require minimum length
  if (!password || password.length < 6) {
    return false;
  }
  // Reject obvious patterns
  if (password.toLowerCase() === "password") {
    return false;
  }
  return true;
}

function validateProductName(name) {
  // Reject dangerous characters often used in SQL injection
  const forbidden = /['";]/;   // ✅ removed the problematic -- 
  return !forbidden.test(name);
}

// Example tests
console.log("Username test:", validateUsername("ad"));       // false
console.log("Password test:", validatePassword("123"));      // false
console.log("Product test:", validateProductName("Cement")); // true
console.log("Product test:", validateProductName("' OR 1=1")); // false
