const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static files (HTML, CSS, JS) serve பண்ண
app.use(express.static(path.join(__dirname, './')));

// Main Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Ram Software WebOS Server running on port ${PORT}`);
});
