import { Request, Response } from 'express';
import hostService from '../services/hostService.js';

export async function hostSignUp(req: Request, res: Response) {
	const { id } = res.locals.user;
	const { price, maxWeight, minWeight, city, address } = req.body;

	await hostService.createHost(id, price, minWeight, maxWeight, city, address);

	res.sendStatus(201);
}

export async function getHostsByName(req: Request, res: Response) {}
