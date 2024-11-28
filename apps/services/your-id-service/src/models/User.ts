import mongoose from 'mongoose';
import { IUser } from '../interfaces/user';

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
