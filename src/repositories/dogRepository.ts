import { prisma } from '../database.js';
import { CreateDogData } from '../interfaces/createData.js';

async function insert(createUserData: CreateDogData) {
	try {
		await prisma.dog.create({
			data: createUserData,
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByUserId(userId: number) {
	try {
		return await prisma.dog.findMany({
			where: {
				userId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const dogRepository = {
	insert,
	getByUserId,
};

export default dogRepository;
