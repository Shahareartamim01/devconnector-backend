import express from 'express';
import {getUser, createUser} from '../controllers/userController.js';

const router = express.Router();
// Route to get all users

router.get('/users', getUser);

// Route to create a new user
router.post('/users', createUser);

export default router;
// This code defines routes for user-related operations in a Node.js application using Express.