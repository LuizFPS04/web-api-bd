import express from 'express';
import { getItem, getItems, createItem } from '../controllers/itemController.js';
import { createUser, getUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/items', getItems);
router.get('/items/:id', getItem);
router.post('/items', createItem);

router.get('/users', getUsers);
router.get('/user', getUser);
router.post('/user', createUser);

export default router;

