import express from 'express';
import {greetUser} from '../controllers/greetController.js';

const router = express.Router();

// Define the route for greeting users

router.get('/greet', greetUser);

export default router;
// This code defines a route for greeting users in an Express application.