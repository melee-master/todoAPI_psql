const { database } = require('pg/lib/defaults')

const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    database: "todo_database",
    host: "localhost",
    port: 5432
});

module.exports = pool;
