import { Router } from 'express';
import { body, checkSchema } from 'express-validator';
import { createUserValidatorSchema, getUserValidatorSchema, updateUserValidatorSchema } from '../validators/userValidators';
import * as userController from '../controllers/userController';
import { mockAuthorization } from '../middleware/authorization';
import { mockAuthentication } from '../middleware/authentication';

const router = Router();

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Creates a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal Server Error
 */

router.post('', mockAuthentication, mockAuthorization(['admin']), checkSchema(createUserValidatorSchema), userController.createUser);

/**
 * @openapi
 * /user/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Updates a user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal Server Error
 */

router.put('/:id', mockAuthentication, mockAuthorization(['admin']), checkSchema(updateUserValidatorSchema), userController.updateUser);

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Retrieves a user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal Server Error
 */

router.get('/:id', mockAuthentication, mockAuthorization(['admin', 'user']), checkSchema(getUserValidatorSchema,['params']), userController.getUser);

/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Deletes a user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal Server Error
 */

router.delete('/:id', mockAuthentication, mockAuthorization(['admin']), userController.deleteUser);

export default router;
