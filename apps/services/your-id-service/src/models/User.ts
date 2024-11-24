import mongoose from 'mongoose';

export interface IUser extends Document {
    firstName: string,
    lastName: string,
    email: string,
    cellPhoneNumber: string,
    address:  Array<{ name: string, value: string }>,
    ssn: string,
    dateOfBirth: Date,
    medicareBeneficiaryIdentifiers: string,
    documents: Array<string>
};

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    value: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    cellPhoneNumber: String,
    address: { type:[addressSchema], required: true},
    ssn: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    medicareBeneficiaryIdentifiers: { type: String, required: true },
    documents: [String]
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
