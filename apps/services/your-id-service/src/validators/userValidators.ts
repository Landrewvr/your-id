import { Schema } from "express-validator";
import { userPatterns } from "../consts/patterns";
import { userMessages } from "../consts/messages";

const isRequired = (field: string) => {
    return `${field} is required.`;
}

const isNotValid = (field: string) => {
    return `${field} is not valid.`;
}

const mongoIdError = {
    isMongoId: {
        errorMessage: 'The provided MongoId is not valid.'
    }
}

export const createUserValidatorSchema: Schema = {
    firstName: {
        notEmpty: {
            errorMessage: isRequired('firstName')
        }
    },
    lastName: {
        notEmpty: {
            errorMessage: isRequired('lastName')
        }
    },
    email: {
        notEmpty: {
            errorMessage: isRequired('email')
        },
        isEmail: {
            errorMessage: isNotValid('email')
        }
    },
    cellPhoneNumber: {
        notEmpty: {
            errorMessage: isRequired('cellPhoneNumber')
        },
        matches: {
            options: [userPatterns.PHONE],
            errorMessage: `${isNotValid('cellPhoneNumber')} ${userMessages.PHONE}`
        }
    },
    address: {
        notEmpty: {
            errorMessage: isRequired('address'),
        },
        matches: {
            options: [userPatterns.ADDRESS],
            errorMessage: `${isNotValid('address')} ${userMessages.ADDRESS}`
        }
    },
    mailingAddress: {
        matches: {
            options: [userPatterns.ADDRESS],
            errorMessage: `${isNotValid('address')} ${userMessages.ADDRESS}`
        },
        optional: { options: { nullable: true, checkFalsy: true } }
    },
    ssn: {
        notEmpty: {
            errorMessage: isRequired('ssn'),
        },
        matches: {
            options: [userPatterns.SSN],
            errorMessage: `${isNotValid('ssn')} ${userMessages.SSN}`
        }
    },
    dateOfBirth: {
        notEmpty: {
            errorMessage: isRequired('dateOfBirth')
        }
    },
    medicareBeneficiaryIdentifiers: {
        notEmpty: {
            errorMessage: isRequired('medicareBeneficiaryIdentifiers')
        },
        matches: {
            options: [userPatterns.MEDICARE_IDENTIFIERS],
            errorMessage: `${isNotValid('medicareBeneficiaryIdentifiers')} ${userMessages.MEDICARE_IDENTIFIERS}`
        }
    }
}

export const getUserValidatorSchema: Schema = {
    id: mongoIdError
}

export const updateUserValidatorSchema: Schema = {
    ...createUserValidatorSchema,
    _id: mongoIdError
}
