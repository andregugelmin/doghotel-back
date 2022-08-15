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

async function getHostsByNameAndSurname(name: string, surname: string) {
	try {
		return await prisma.host.findMany({
			where: {
				user: {
					OR: [
						{
							name: {
								search: name,
							},
						},
						{
							surname: {
								search: name,
							},
						},
					],
				},
			},
			select: {
				price: true,
				minWeight: true,
				maxWeight: true,
				user: {
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

async function getHostsByNameOrSurname(name: string) {
	try {
		return await prisma.host.findMany({
			where: {
				user: {
					OR: [
						{
							name: {
								search: name,
							},
						},
						{
							surname: {
								search: name,
							},
						},
					],
				},
			},
			select: {
				price: true,
				minWeight: true,
				maxWeight: true,
				user: {
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

async function getHostsByCity(city: string) {
	try {
		return await prisma.host.findMany({
			where: {
				user: {
					city: {
						search: city,
					},
				},
			},
			select: {
				price: true,
				minWeight: true,
				maxWeight: true,
				user: {
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

async function getHostUserById(id: number) {
	try {
		return await prisma.host.findMany({
			where: {
				id,
			},
			select: {
				price: true,
				minWeight: true,
				maxWeight: true,
				user: {
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

const hostRepository = {
	insert,
	getByUserId,
	getHostsByNameAndSurname,
	getHostsByNameOrSurname,
	getHostsByCity,
	getHostUserById,
};

export default hostRepository;
