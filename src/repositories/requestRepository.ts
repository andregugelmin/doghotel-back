import { prisma } from '../database.js';
import { CreateRequestData } from '../interfaces/createData.js';

async function insert(createRequestData: CreateRequestData) {
	try {
		await prisma.request.create({
			data: createRequestData,
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByGuestId(guestId: number) {
	try {
		return await prisma.request.findMany({
			where: {
				guestId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByHostId(hostId: number) {
	try {
		return await prisma.request.findMany({
			where: {
				hostId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const requestRepository = {
	insert,
	getByGuestId,
	getByHostId,
};

export default requestRepository;
