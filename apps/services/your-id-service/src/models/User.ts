import mongoose from 'mongoose';
import { IUser } from '../interfaces/user';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - cellPhoneNumber
 *         - address
 *         - mailingAddress
 *         - ssn
 *         - dateOfBirth
 *         - medicareBeneficiaryIdentifiers
 *       properties:
 *         firstName:
 *           type: string
 *           example: Luis
 *         lastName:
 *           type: string
 *           example: Veras
 *         email:
 *           type: string
 *           example: luis.veras@gmail.com
 *         cellPhoneNumber:
 *           type: string
 *           example: (343) 435-3454
 *         address:
 *           type: string
 *           example: 1234 Main St, Orlando, FL 33542
 *         mailingAddress:
 *           type: string
 *           example: 1234 Main St, Orlando, FL 33542
 *         ssn:
 *           type: string
 *           example: 123-45-5678
 *         dateOfBirth:
 *           type: string
 *           format: date-time
 *           example: 1999-01-01T00:00:00.000Z
 *         medicareBeneficiaryIdentifiers:
 *           type: string
 *           example: 1EG4-TE5-MK73
 *     UpdateUserInput:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateUserInput'
 *         - type: object
 *           required:
 *             - _id
 *           properties:
 *             _id:
 *               type: string
 *               example: 507f1f77bcf86cd799439011
 *     UserResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/UpdateUserInput'
 *         - type: object
 */

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    cellPhoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    mailingAddress: { type: String, required: false },
    ssn: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    medicareBeneficiaryIdentifiers: { type: String, required: true },
    documents: [String]
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
