import express from 'express';
import { registerUser, getUserById, getAllUsers, updateUser, deleteUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/user/register', registerUser);
router.get('/user/:id', getUserById);
router.get('/user', getAllUsers);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/user/login', loginUser);

export default router;

