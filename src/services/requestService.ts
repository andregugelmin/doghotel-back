import requestRepository from '../repositories/requestRepository.js';
import dogService from './dogService.js';
import hostService from './hostService.js';

async function getRequestsByHostId(hostId: number) {
	const requests = await requestRepository.getByHostId(hostId);
	let requestsData = [];
	for (const request of requests) {
		const dogsIds = request.dogsIds;

		const dogs = await dogService.getDogsByArrayId(dogsIds);
		const obj = { ...request, dogs };

		requestsData.push(obj);
	}

	return requestsData;
}

async function getRequestsByGuestId(guestId: number) {
	const requests = await requestRepository.getByGuestId(guestId);
	let requestsData = [];
	for (const request of requests) {
		const dogsIds = request.dogsIds;

		const dogs = await dogService.getDogsByArrayId(dogsIds);
		const obj = { ...request, dogs };

		requestsData.push(obj);
	}

	return requestsData;
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

async function acceptRequest(id: number) {
	await requestRepository.setAccepted(id);
}

async function rejectRequest(id: number) {
	await requestRepository.setInactive(id);
}

const requestService = { getRequestsByHostId, getRequestsByGuestId, sendRequest, acceptRequest, rejectRequest };

export default requestService;
