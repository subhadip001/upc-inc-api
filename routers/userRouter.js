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
  verifyEmail,
  EmailUser,
  EditUser,
} = require("../controllers/userController");

router.route("/test").get(testController);
router.route("/check").post(getUserProfile);
router.route("/fetch").get(getUserDetails);
router.route("/register").post(createNewUser);
router.route("/update").patch(updateUser);
router.route("/verify").post(verifyEmail);
router.route("/resetEmail").get(EmailUser);
router.route("/resetPass").patch(resetPassword);
router.route("/edit").patch(EditUser);
router.route("/getAll").get(getAllUsers);
router.route("/deleteOne").delete(deleteUser);

module.exports = router;
