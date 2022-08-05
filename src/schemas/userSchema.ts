import Joi from 'joi';

export const createUserSchema = Joi.object({
	email: Joi.string().required(),
	name: Joi.string().required(),
	photoUrl: Joi.string().required(),
	city: Joi.string().required(),
	address: Joi.string().required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.valid(Joi.ref('password')).required(),
});
