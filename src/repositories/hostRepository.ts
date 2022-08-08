import { prisma } from '../database.js';
import { CreateHostData } from '../interfaces/createData.js';

async function insert(createHostData: CreateHostData) {
	try {
		await prisma.host.create({
			data: createHostData,
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByUserId(userId: number) {
	try {
		return await prisma.host.findFirst({
			where: {
				userId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const hostRepository = {
	insert,
	getByUserId,
};

export default hostRepository;
