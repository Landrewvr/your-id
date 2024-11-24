import { type NextFunction, type Request, type Response, Router} from 'express';
import User from '../models/User';

const router = Router();

router.post('', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.create(req.body);
        
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
});

// Get user by id
router.get('/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            res.status(404);
            throw new Error('User not found');
        }
        
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
});

// Update User by id
router.put('/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, {$set: req.body}, {new: true});

        if (!user) {
            res.status(404);
            throw new Error('User not found');
        }

        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
});

// Delete User by id
router.delete('/:id', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });

        if (!user) {
            res.status(404);
            throw new Error('User not found');
        }

        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
});

export default router;
