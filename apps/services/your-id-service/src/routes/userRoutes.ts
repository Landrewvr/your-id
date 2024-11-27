import { type NextFunction, type Request, type Response, Router} from 'express';
import User from '../models/User';
import { checkSchema, validationResult } from 'express-validator';
import { createUserValidatorSchema, updateUserValidatorSchema } from '../validators/userValidators';

const router = Router();
// Create user
router.post('', checkSchema(createUserValidatorSchema),async(req: Request, res: Response, next: NextFunction) => {
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
});

// Update User by id
router.put('/:id', checkSchema(updateUserValidatorSchema), async(req: Request, res: Response, next: NextFunction) => {
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
});

// Get user by id
router.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
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
});

// Delete User by id
router.delete('/:id', async(req: Request, res: Response, next: NextFunction) => {
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
});

export default router;
