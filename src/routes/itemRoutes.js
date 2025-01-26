import express from 'express';
import { getItem, getItems, createItem } from '../controllers/itemController.js';

const router = express.Router();

router.get('/items', getItems);
router.get('/items/:id', getItem);
router.post('/items', createItem);

export default router;

