import Joi from 'joi';
export var createDogSchema = Joi.object({
    name: Joi.string().required(),
    weight: Joi.number().required(),
    isNeutered: Joi.boolean().required(),
    gender: Joi.string().valid('Female', 'Male').required(),
    breed: Joi.string().required()
});
