import express from 'express';
import dotenv from 'dotenv';
import testRoutes from './routes/testRoutes.js';
import userRoutes from './routes/userRoutes.js';
import greetRoutes from './routes/greetRoutes.js';
import mongoose from 'mongoose';
import User from './models/user.js'; // Import the User model 

dotenv.config(); // Load .env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('API Running ✅');
});
app.use('/api', testRoutes);

app.use('/api', greetRoutes);

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



mongoose.connection.once('open', async () => {
  try {
    const user1 = new User({
      name: 'Tarin',
      email: 'tarin123@example.com',
      password: '123456'
    });

    const user2 = new User({
      name: 'Neela',
      email: 'neela123@example.com',
      password: 'abcdef'
    });

    const user3 = new User({
      name: 'Tamim',
      email: 'tamim123@example.com',
      password: 'password123'
    });

    const user4= new User({
        name: 'Arzaa',
        email: 'arzaa123@example.com',
        password: 'arzaa123',
    })
    // Save users to the database

    await user1.save();
    await user2.save();
    await user3.save();
    await user4.save();

    console.log('✅ Users saved to database!');

    console.log('Display Name:', user1.displayName); // Access virtual field

    user1.sayHello(); // Call method on user1

  } catch (err) {
    console.error('Error saving users:', err.message);
  }
});







    await User.collection.drop();

