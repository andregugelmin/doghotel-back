import { Router } from 'express';
import {
	acceptRequest,
	addRequest,
	getGuestRequests,
	getHostRequests,
	rejectRequest,
} from '../controllers/requestController.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const requestRouter = Router();

requestRouter.get('/requests/guest', validateToken, getGuestRequests);
requestRouter.get('/requests/host', validateToken, getHostRequests);
requestRouter.post('/request', validateToken, addRequest);
requestRouter.post('/request/accept', validateToken, acceptRequest);
requestRouter.post('/request/reject', validateToken, rejectRequest);

export default requestRouter;
