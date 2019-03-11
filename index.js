const express = require('express');
const path = require('path');

const app = express();

const members = [{
        name: 'reach',
        age: 20
    },
    {
        name: 'zreawwaach',
        age: 20
    },
    {
        name: 'qreacwwh',
        age: 20
    }
];

app.get('/api/members', (req, res) => {
    res.json(members);
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});