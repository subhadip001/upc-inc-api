const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
  updateUser,
  createNewUser,
  deleteUser,
  testController,
} = require("../controllers/userController");

router.route("/test").get(testController);

router.route("/").get(getUserDetails).post(createNewUser).patch(updateUser);

module.exports = router;
