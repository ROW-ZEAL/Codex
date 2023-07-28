const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
    host: "127.0.0.1",
    database: "postgres",
    user: "postgres",
    password: "postgres",
    port: "5433"
});

app.use(express.json());

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO signup (name, email, password) VALUES ($1, $2, $3)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    pool.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM signup WHERE email = $1 AND password = $2";
    pool.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }
        if (data.rows.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.post('/logout', (req, res) => {
    // Perform any necessary logout actions (e.g., clear session, tokens, etc.)
    // Return a success message or appropriate response
    return res.json("Logout successful");
});



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
