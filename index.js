import express from 'express';
import dotenv from 'dotenv';
import testRoutes from './routes/testRoutes.js';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('API Running ✅');
});
app.use('/api', testRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
