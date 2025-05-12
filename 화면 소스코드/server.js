const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 9999;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Redirect root to chat page
app.get('/', (req, res) => {
    res.redirect('/chat');
});

// Serve chat page
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 