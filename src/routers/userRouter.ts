import { Router } from 'express';
import { getOwnUser, signup, singin } from '../controllers/userController.js';
import { validateToken } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/signup/user', validateSchema(createUserSchema), signup);
userRouter.get('/ownuser', validateToken, getOwnUser);
userRouter.post('/signin', singin);

export default userRouter;
