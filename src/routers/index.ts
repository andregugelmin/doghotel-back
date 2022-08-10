import { Router } from 'express';
import dogRouter from './dogRouter.js';
import hostRouter from './hostRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use(userRouter);
router.use(hostRouter);
router.use(dogRouter);

export default router;
