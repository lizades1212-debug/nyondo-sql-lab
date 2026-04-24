
const Database = require('better-sqlite3');
const db = new Database('nyondo_stock.db');

// Query A
console.log("Query A:", db.prepare("SELECT * FROM products").all());

// Query B
console.log("Query B:", db.prepare("SELECT name, price FROM products").all());

// Query C
console.log("Query C:", db.prepare("SELECT * FROM products WHERE id=3").all());

// Query D
console.log("Query D:", db.prepare("SELECT * FROM products WHERE name LIKE '%sheet%'").all());

// Query E
console.log("Query E:", db.prepare("SELECT * FROM products ORDER BY price DESC").all());

// Query F
console.log("Query F:", db.prepare("SELECT * FROM products ORDER BY price DESC LIMIT 2").all());

// Query G
db.prepare("UPDATE products SET price=38000 WHERE id=1").run();
console.log("Query G:", db.prepare("SELECT * FROM products").all());
