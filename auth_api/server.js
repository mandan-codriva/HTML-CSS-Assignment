const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api', authRoutes);


// Default Route
app.get('/', (req, res) => {
  res.send('Secure Auth API Running...');
});


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});