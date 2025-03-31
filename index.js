const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const port = 3000;

const Product = require("./Models/Product");
const Signup = require("./Models/Signup");
const Signup = require("./Models/Signin");



// POST API to add a product
app.post('/products', async (req, res) => {
    try {
      const { title, price, description, category, image, rating, discount, offerprice, reviews } = req.body;
      const product = new Product({ title, price, description, category, image, rating, discount, offerprice, reviews });
      await product.save();
      res.status(201).send({ message: 'Product added successfully', product });
    } catch (error) {
      res.status(500).send({ message: 'Error adding product', error });
    }
  });

  // GET API to retrieve all products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });

  // Signup API
app.post('/signup', async (req, res) => {
    const { rollNo, password, ...otherDetails } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ rollNo, password: hashedPassword, ...otherDetails });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  });
  
  // Signin API
  app.post('/signin', async (req, res) => {
    const { rollNo, password } = req.body;
    const user = await User.findOne({ rollNo });
    if (!user) return res.status(400).send({ message: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ message: 'Invalid credentials' });
    const token = jwt.sign({ rollNo: user.rollNo }, 'secretkey', { expiresIn: '1h' });
    res.send({ message: 'Login successful', token });
  });
  
  app.listen(3000, () => console.log('Server running on port 3000'));

  // Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  

  
