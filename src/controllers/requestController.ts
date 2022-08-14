import { Request, Response } from 'express';
import requestService from '../services/requestService.js';

export async function getHostRequests(req: Request, res: Response) {
	const { id } = res.locals.user;

	const request = await requestService.getRequestsByHostId(id);

	return res.send(request).status(200);
}

export async function getGuestRequests(req: Request, res: Response) {
	const { id } = res.locals.user;

	const request = await requestService.getRequestsByGuestId(id);

	return res.send(request).status(200);
}

export async function addRequest(req: Request, res: Response) {
	const { id } = res.locals.user;
	const { hostId, entryDate, departureDate, totalPrice, dogsIds } = req.body;

	const request = await requestService.sendRequest(id, hostId, dogsIds, entryDate, departureDate, totalPrice);

	return res.sendStatus(201);
}
