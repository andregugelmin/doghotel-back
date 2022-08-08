import hostRepository from '../repositories/hostRepository.js';
import userRepository from '../repositories/userRepository.js';

async function createHost(
	userId: number,
	price: number,
	minWeight: number,
	maxWeight: number,
	city: string,
	address: string
) {
	const checkHost = await hostRepository.getByUserId(userId);

	if (!checkHost) {
		await hostRepository.insert({ userId, price, minWeight, maxWeight });
	}

	await userRepository.updateData(userId, { isHost: true, city, address });
}

const hostService = {
	createHost,
};

export default hostService;
