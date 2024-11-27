export type User = {
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
    documents: Array<string>
}
