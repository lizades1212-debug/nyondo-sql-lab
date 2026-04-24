
const Database = require('better-sqlite3');
const db = new Database('nyondo_stock.db');


function searchProduct(name) {
  const rows = db.prepare("SELECT * FROM products WHERE name LIKE ?").all(name);
  console.log("Secure product search result:", rows);
}

function login(username, password) {
  const row = db.prepare("SELECT * FROM users WHERE username=? AND password=?").get(username, password);
  console.log("Secure login result:", row);
}

//Test with malicious inputs
searchProduct("' OR 1=1 --");
login("admin' --", "anything");
login("' OR '1'='1", "' OR '1'='1");
searchProduct("' UNION SELECT id, username, password, role FROM users --");

