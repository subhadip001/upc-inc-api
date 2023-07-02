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
router.route("/check").post(getUserProfile);
router.route("/fetch").get(getUserDetails);
router.route("/register").post(createNewUser);
router.route("/update").patch(updateUser);

module.exports = router;
