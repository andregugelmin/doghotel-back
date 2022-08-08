import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';
import { encryptPassword, verifyPassword } from '../utils/encryptUtils.js';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils.js';

async function createUser(email: string, name: string, surname: string, password: string) {
	const passwordEncrypted = encryptPassword(password);
	const checkUserEmail = await userRepository.getByEmail(email);

	if (checkUserEmail) throw conflictError('User email already registered');

	await userRepository.insert({ name, surname, email, password: passwordEncrypted });
}

async function signin(email: string, password: string) {
	const userDb = await getUserOrFailByEmail(email);

	verifyPassword(password, userDb.password);

	const token = jwt.sign({ email, id: userDb.id }, process.env.JWT_SECRET);

	return token;
}

async function getUserOrFailByEmail(email: string) {
	const user = await userRepository.getByEmail(email);
	if (!user) throw unauthorizedError('Invalid email');

	return user;
}

async function getUserOrFailById(id: number) {
	const user = await userRepository.getById(id);
	if (!user) throw notFoundError('User not found');

	return user;
}

const userService = {
	createUser,
	signin,
	getUserOrFailById,
};

export default userService;
