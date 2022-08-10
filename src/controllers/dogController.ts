import { Request, Response } from 'express';
import dogService from '../services/dogService.js';

export async function dogSignUp(req: Request, res: Response) {
	const { id } = res.locals.user;
	const { name, weight, isNeutered, gender, breed } = req.body;

	await dogService.createDog(name, weight, isNeutered, gender, breed, id);

	res.sendStatus(201);
}

export async function getDogs(req: Request, res: Response) {
	const { id } = res.locals.user;

	const dogs = await dogService.getDogs(id);

	res.send(dogs).status(200);
}
