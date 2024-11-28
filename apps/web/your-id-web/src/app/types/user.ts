export interface User {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    cellPhoneNumber: string,
    address: string,
    mailingAddress: string,
    ssn: string,
    dateOfBirth: Date,
    medicareBeneficiaryIdentifiers: string,
    documents: string[]
}
