import Joi from "joi";
import { Profile } from "../models/profile.model.js";

const profileSchema = Joi.object({
  status: Joi.string().required(),
  skills: Joi.string().required(),
}).unknown(true);
const profile = async (req, res) => {
  const { error } = profileSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json(error.message);
  }
  // Extract fields from request body
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  //build profile object
  const profileFields = {};
  profileFields.user = req.user.id;

  company && (profileFields.company = company);
  website && (profileFields.website = website);
  location && (profileFields.location = location);
  bio && (profileFields.bio = bio);
  status && (profileFields.status = status);
  githubusername && (profileFields.githubusername = githubusername);
  if (skills) {
    profileFields.skills = skills.split(",").map((skills) => skills.trim());
  }

  //build social objects
  profileFields.social = {};
  youtube && (profileFields.social.youtube = youtube);
  facebook && (profileFields.social.facebook = facebook);
  twitter && (profileFields.social.twitter = twitter);
  instagram && (profileFields.social.instagram = instagram);
  linkedin && (profileFields.social.linkedin = linkedin);

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    //Update
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    //create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
export { profile };
