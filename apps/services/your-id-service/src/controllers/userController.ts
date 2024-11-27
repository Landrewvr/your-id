import { type NextFunction, type Request, type Response, Router} from 'express';
import User from '../models/User';
import { validationResult } from 'express-validator';

// Create user
export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const response = await User.create(req.body);
        
        res.status(200).json(response);
    } catch (err) {
        next(err)
    }
};

// Update User by id
export const updateUser = async(req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const response = await User.findByIdAndUpdate({ _id: req.params.id }, {$set: req.body}, {new: true});

        if (!response) {
            res.status(404);
            throw new Error('User not found');
        }

        res.status(200).json(response);
    } catch (err) {
        next(err)
    }
};

// Get user by id
export const getUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await User.findById(req.params.id);

        if (!response) {
            res.status(404);
            throw new Error('User not found');
        }
        
        res.status(200).json(response);
    } catch (err) {
        next(err)
    }
};

// Delete User by id
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await User.deleteOne({ _id: req.params.id });

        if (!response) {
            res.status(404);
            throw new Error('User not found');
        }

        res.status(200).json(response);
    } catch (err) {
        next(err)
    }
};
