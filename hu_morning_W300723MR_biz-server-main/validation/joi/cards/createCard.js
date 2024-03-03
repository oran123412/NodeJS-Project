import Joi from "joi";
const createCardSchema = Joi.object({
  title: Joi().string.min(2).max(256).requierd(),
  subtitle: Joi().string.min(2).max(256).requierd(),
  description: Joi().string.min(2).max(256).requierd(),
  phone: Joi().string.min(2).max(256).requierd(),
  email: Joi().string.min(2).max(256).requierd(),
  web: Joi().string.min(2).max(256),
  image: Joi.object().keys({
    url: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .allow(""),
    alt: Joi.string().min(2).max(256).allow(""),
    address: Joi.object()
      .keys({
        state: Joi.string().allow(""),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.number().min(10000).max(9999999).allow(""),
      })
      .required(),
  }),
});

export default createCardSchema;
