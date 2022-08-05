import { Router } from 'express';
import { createUser } from '../controllers/userController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/signup/user', validateSchema(createUserSchema), createUser);
