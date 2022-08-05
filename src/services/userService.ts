import userRepository from '../repositories/userRepository.js';
import { encryptPassword } from '../utils/encryptUtils.js';
import { conflictError } from '../utils/errorUtils.js';

async function createUser(
	name: string,
	email: string,
	password: string,
	photoUrl: string,
	city: string,
	address: string
) {
	const passwordEncrypted = encryptPassword(password);
	const checkUserEmail = await userRepository.getByEmail(email);

	if (checkUserEmail) throw conflictError('User email already registered');

	await userRepository.insert({ name, email, password: passwordEncrypted, photoUrl, city, address });
}

const userService = {
	createUser,
};

export default userService;
