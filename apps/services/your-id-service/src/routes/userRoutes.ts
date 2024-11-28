import { Router } from 'express';
import { body, checkSchema } from 'express-validator';
import { createUserValidatorSchema, getUserValidatorSchema, updateUserValidatorSchema } from '../validators/userValidators';
import * as userController from '../controllers/userController';
import { mockAuthorization } from '../middleware/authorization';

const router = Router();

// Create user
router.post('', mockAuthorization(['admin']), checkSchema(createUserValidatorSchema), userController.createUser);

// Update user by ID
router.put('/:id', mockAuthorization(['admin']), checkSchema(updateUserValidatorSchema), userController.updateUser);

// Get user by ID
router.get('/:id', mockAuthorization(['admin', 'user']), checkSchema(getUserValidatorSchema), userController.getUser);

// Delete user by ID
router.delete('/:id', mockAuthorization(['admin']), userController.deleteUser);

export default router;
