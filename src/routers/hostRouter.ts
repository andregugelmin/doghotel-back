import { Router } from 'express';
import { hostSignUp } from '../controllers/hostController.js';
import { validateToken } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createHostSchema } from '../schemas/hostSchema.js';

const hostRouter = Router();

hostRouter.post('/signup/host', validateToken, validateSchema(createHostSchema), hostSignUp);

export default hostRouter;
