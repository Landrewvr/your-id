import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { createUserValidatorSchema, updateUserValidatorSchema } from '../validators/userValidators';
import * as userController from '../controllers/userController';

const router = Router();

// Create user
router.post('', checkSchema(createUserValidatorSchema), userController.createUser);

// Update user by ID
router.put('/:id', checkSchema(updateUserValidatorSchema), userController.updateUser);

// Get user by ID
router.get('/:id', userController.getUser);

// Delete user by ID
router.delete('/:id', userController.deleteUser);

export default router;
