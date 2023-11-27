import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

// will call controller function
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getSingleUser);
router.delete('/:userId', UserController.deleteSingleUser);

export const UserRoutes = router;
