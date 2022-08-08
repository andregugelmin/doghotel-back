import { Request, Response } from 'express';
import userService from '../services/userService.js';
import { wrongSchemaError } from '../utils/errorUtils.js';

export async function signup(req: Request, res: Response) {
	const { email, name, surname, password, confirmPassword } = req.body;

	if (password !== confirmPassword) throw wrongSchemaError('Password confirmation differs from password');

	await userService.createUser(email, name, surname, password);
	res.sendStatus(201);
}

export async function singin(req: Request, res: Response) {
	const user = req.body;
	const token = await userService.signin(user.email, user.password);

	return res.send({ token }).status(200);
}

export async function getOwnUser(req: Request, res: Response) {
	const { id } = res.locals.user;

	const user = await userService.getUserOrFailById(id);

	return res.send(user).status(200);
}
