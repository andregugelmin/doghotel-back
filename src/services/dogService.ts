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

const dogService = {
	createDog,
	getDogs,
};

export default dogService;
