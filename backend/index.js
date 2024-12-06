const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Agar bisa menerima request JSON

let users = [
    { id: 1, name: 'Deni', email: 'deni@gamil.com' }
];

// GET: Menampilkan semua data users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST: Menambahkan user baru
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

const PORT = 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
