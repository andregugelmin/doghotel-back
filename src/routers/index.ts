import { Router } from 'express';
import dogRouter from './dogRouter.js';
import hostRouter from './hostRouter.js';
import requestRouter from './requestRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use(userRouter);
router.use(hostRouter);
router.use(dogRouter);
router.use(requestRouter);

export default router;
