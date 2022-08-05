import { prisma } from '../database.js';
import { CreateUserData } from '../interfaces/createData.js';

async function insert(createUserData: CreateUserData) {
	try {
		await prisma.user.create({
			data: createUserData,
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByEmail(email: string) {
	try {
		return await prisma.user.findFirst({
			where: {
				email,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const userRepository = {
	insert,
	getByEmail,
};

export default userRepository;
