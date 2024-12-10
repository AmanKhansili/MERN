import Joi from "joi";

const profileSchema = Joi.object({
  status: Joi.string().required(),
  skills: Joi.string().required(),
});
const profile = async (req, res) => {
  const { error } = profileSchema.validate(req.body, { abortEarly: false });
  error && res.status(400).json(error.message);
};
export { profile };
