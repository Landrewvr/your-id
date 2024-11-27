import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    firstName: string,
    lastName: string,
    email: string,
    cellPhoneNumber: string,
    address: string,
    mailingAddress: string,
    ssn: string,
    dateOfBirth: Date,
    medicareBeneficiaryIdentifiers: string,
    documents: Array<string>
};

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
