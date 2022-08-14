import { Router } from 'express';
import { addRequest, getGuestRequests, getHostRequests } from '../controllers/requestController.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const requestRouter = Router();

requestRouter.get('/requests/guest', validateToken, getGuestRequests);
requestRouter.get('/requests/host', validateToken, getHostRequests);
requestRouter.post('/request', validateToken, addRequest);

export default requestRouter;
