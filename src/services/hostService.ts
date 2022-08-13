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

async function getHostsByName(name: string) {
	const nameArr = name.split(' ');

	let hosts = new Array();

	if (nameArr.length === 2) {
		const hostsQuery1 = await hostRepository.getHostsByNameAndSurname(nameArr[0], nameArr[1]);
		hosts = [...hosts, ...hostsQuery1];
	}

	for (let i = 0; i < nameArr.length; i++) {
		const hostsQuery2 = await hostRepository.getHostsByNameOrSurname(nameArr[i]);
		hosts = [...hosts, ...hostsQuery2];
	}
	return removeDuplicatesHostArray(hosts);
}

async function getHostsByCity(city: string) {
	const hostsQuery = await hostRepository.getHostsByCity(city);

	return hostsQuery;
}

function removeDuplicatesHostArray(array: any) {
	const seems = {};
	let arr = new Array();

	for (let i = 0; i < array.length; i++) {
		if (seems[array[i].user.id] === undefined) {
			seems[array[i].user.id] = true;
			arr = [...arr, array[i]];
		}
	}
	return arr;
}

const hostService = {
	createHost,
	getHostsByName,
	getHostsByCity,
};

export default hostService;
