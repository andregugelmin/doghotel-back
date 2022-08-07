import Joi from 'joi';

export const createUserSchema = Joi.object({
	email: Joi.string().email().required(),
	name: Joi.string().required(),
	surname: Joi.string().required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.valid(Joi.ref('password')).required(),
});
