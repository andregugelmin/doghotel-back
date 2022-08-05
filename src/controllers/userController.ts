import { Request, Response } from 'express';
import userService from '../services/userService.js';
import { wrongSchemaError } from '../utils/errorUtils.js';

export async function createUser(req: Request, res: Response) {
	const { name, email, password, confirmPassword, photoUrl, city, address } = req.body;

	if (password !== confirmPassword) throw wrongSchemaError('Password confirmation differs from password');

	await userService.createUser(name, email, password, photoUrl, city, address);
	res.sendStatus(201);
}
