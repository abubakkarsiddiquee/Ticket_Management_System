import express from 'express';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5002;

// MongoDB Atlas connection (credentials hardcoded)
const url = 'mongodb+srv://asiddique201329:qsvJzJsi5PpkTKZm@cluster0.phfoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let db;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
MongoClient.connect(url)
  .then((client) => {
    console.log('Connected to MongoDB Atlas');
    db = client.db('mydatabase'); // Make sure this matches your actual database name
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas', err);
  });

// Signup route
app.post('/signup', async (req, res) => {
    const { username, name, gender, age, phone, email, password } = req.body;
  
    // Validate input (this can be more detailed)
    if (!username || !email || !password || !name || !gender || !age || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Check if the user already exists (by email or username)
      const existingUser = await db.collection('users').findOne({ $or: [{ email }, { username }] });
      
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email or username already exists' });
      }
  
      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the new user object
      const newUser = {
        username,
        name,
        gender,
        age: parseInt(age, 10), // Ensure age is stored as a number
        phone,
        email,
        password: hashedPassword,
      };
  
      // Insert the new user into the database
      await db.collection('users').insertOne(newUser);
  
      console.log('User created successfully:', email);
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Error creating user' });
    }
  });

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials for:', email);
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create and send JWT
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    console.log('User logged in successfully:', email);
    res.json({ token });
  } catch (error) {
    console.error('Server error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
