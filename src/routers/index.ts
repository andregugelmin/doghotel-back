import { Router } from 'express';
import hostRouter from './hostRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use(userRouter);
router.use(hostRouter);

export default router;
