//write the code for the user controller here.
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModels");

const getUserDetails = asyncHandler(async (req, res) => {
  const { upc_id } = req.query;
  console.log("get request : " + upc_id);
  const user = await User.findOne({ upc_id }).lean();
  if (!user) {
    return res.json({
      message: "No such user , Please register before logging in!!!",
    });
  } else {
    res.json(user);
  }
});

const createNewUser = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { user } = await req.body;

  const userObject = user;

  const userreg = await User.create(userObject);

  if (userreg) {
    res.status(201).json({ message: `new user registered` });
  } else {
    res.status(400).json({ message: `Invalid user data received` });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { user } = req.body;
  console.log("patch req : " + user.upc_id);

  let userUp = await User.findOne({ upc_id: user.upc_id }).exec();
  if (!userUp) {
    console.log(userUp);
    return res
      .status(400)
      .json({ message: `user not found, please login again` });
  }
  userUp.examsCleared = user.examsCleared;
  userUp.application_sector = user.application_sector;
  userUp.additionalInfo = user.additionalInfo;
  userUp.applicationFor = user.applicationFor;
  userUp.presentEmployment = user.presentEmployment;
  userUp.areaOfInterest = user.areaOfInterest;
  userUp.internships = user.internships;
  userUp.workExperiences = user.workExperiences;
  userUp.projects = user.projects;
  userUp.achievements = user.achievements;
  userUp.skills = user.skills;
  userUp.ExtraCurriculars = user.ExtraCurriculars;
  userUp.publication = user.publication;
  userUp.reference = user.reference;

  const updatedUser = await userUp.save().then(() => {
    res.status(200).json({
      success: true,
      message: "updated",
    });
  });
  console.log(updateUser);
});
//Register a user => /api/v1/register
const testController = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This is a test controller",
  });
};
module.exports = {
  testController,
  getUserDetails,
  createNewUser,
  updateUser,
};
