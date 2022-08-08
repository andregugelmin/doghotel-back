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

async function updateData(userId: number, data: any) {
	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: data,
		});
	} catch (error) {
		console.log(error);
	}
}

async function updateIsHost(userId: number, bool: boolean) {
	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				isHost: bool,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function updateCity(userId: number, city: string) {
	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				city,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function updateAddress(userId: number, address: string) {
	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				address,
			},
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

async function getById(id: number) {
	try {
		return await prisma.user.findFirst({
			where: {
				id,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const userRepository = {
	insert,
	getByEmail,
	getById,
	updateData,
	updateIsHost,
	updateCity,
	updateAddress,
};

export default userRepository;
