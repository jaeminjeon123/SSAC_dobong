const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 8410;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Set view engine
app.set('view engine', 'ejs');

// Import routes
const authRoutes = require('./controllers/authController');

// Use routes
app.use('/', authRoutes);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
