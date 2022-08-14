import requestRepository from '../repositories/requestRepository.js';

async function getRequestsByHostId(hostId: number) {
	const requests = await requestRepository.getByHostId(hostId);

	return requests;
}

async function getRequestsByGuestId(guestId: number) {
	const requests = await requestRepository.getByGuestId(guestId);

	return requests;
}

async function sendRequest(
	guestId: number,
	hostId: number,
	dogsIds: number[],
	entryDate: Date,
	departureDate: Date,
	totalPrice: number
) {
	await requestRepository.insert({ guestId, hostId, dogsIds, entryDate, departureDate, totalPrice });
}

const requestService = { getRequestsByHostId, getRequestsByGuestId, sendRequest };

export default requestService;
