const express = require('express');
const cors = require('cors');
const router = require('./routers/route');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:8080',  // Add your frontend URL here
    'http://192.168.8.144:8080' // You can specify the IP address too
  ],
  methods: ["GET", "POST", "OPTIONS"], // Specify the allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  credentials: true // If you need to send cookies or authorization headers
};

// Middleware to enable CORS
app.use(cors(corsOptions));

// Middleware to parse JSON data
app.use(express.json()); // For parsing application/json

// Logging middleware
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  console.log('Request body:', req.body);
  next();
});

app.use('/', router);
  
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/botresponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true // Add these options to avoid deprecation warnings
}).then(() => {
  console.log('Connected to MongoDB');
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
