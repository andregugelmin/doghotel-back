import dogRepository from '../repositories/dogRepository.js';

async function createDog(
	name: string,
	weight: number,
	isNeutered: boolean,
	gender: 'Female' | 'Male',
	breed: string,
	userId: number
) {
	await dogRepository.insert({ name, weight, isNeutered, gender, breed, userId });
}

async function getDogs(userId: number) {
	return await dogRepository.getByUserId(userId);
}

async function getDogsByArrayId(dogsId: number[]) {
	let dogs = [];
	for (const id of dogsId) {
		const dog = await dogRepository.getById(id);
		dogs.push(dog);
	}
	return dogs;
}

const dogService = {
	createDog,
	getDogs,
	getDogsByArrayId,
};

export default dogService;
