import { Router } from 'express';
import { dogSignUp, getDogs } from '../controllers/dogController.js';
import { validateToken } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createDogSchema } from '../schemas/dogSchema.js';

const dogRouter = Router();

dogRouter.post('/signup/dog', validateToken, validateSchema(createDogSchema), dogSignUp);
dogRouter.get('/dogs', validateToken, getDogs);

export default dogRouter;
