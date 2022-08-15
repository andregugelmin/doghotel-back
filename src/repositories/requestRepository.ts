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
				isActive: true,
			},
			select: {
				id: true,
				entryDate: true,
				departureDate: true,
				totalPrice: true,
				isActive: true,
				isAccepted: true,
				dogsIds: true,
				host: {
					select: {
						id: true,
						name: true,
						surname: true,
						city: true,
						address: true,
					},
				},
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
				isActive: true,
			},
			select: {
				id: true,
				entryDate: true,
				departureDate: true,
				totalPrice: true,
				isActive: true,
				isAccepted: true,
				dogsIds: true,
				guest: {
					select: {
						id: true,
						name: true,
						surname: true,
						city: true,
						address: true,
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function setInactive(id: number) {
	try {
		await prisma.request.update({
			where: {
				id,
			},
			data: {
				isActive: false,
				isAccepted: false,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function setAccepted(id: number) {
	try {
		await prisma.request.update({
			where: {
				id,
			},
			data: {
				isActive: true,
				isAccepted: true,
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
	setInactive,
	setAccepted,
};

export default requestRepository;
