export type User = {
    firstName: string,
    lastName: string,
    email: string,
    cellPhoneNumber: string,
    address:  Array<{ name: string, value: string }>,
    ssn: string,
    dateOfBirth: Date,
    medicareBeneficiaryIdentifiers: string,
    documents: Array<string>
}