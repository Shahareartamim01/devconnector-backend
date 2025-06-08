import express from 'express';
import { getTest } from '../controllers/testController.js';

const router = express.Router();

router.get('/test', getTest);

export default router;
