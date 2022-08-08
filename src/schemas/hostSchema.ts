import Joi from 'joi';

export const createHostSchema = Joi.object({
	price: Joi.number().required(),
	minWeight: Joi.number().required(),
	maxWeight: Joi.number().required(),
	city: Joi.string().required(),
	address: Joi.string().required(),
});
