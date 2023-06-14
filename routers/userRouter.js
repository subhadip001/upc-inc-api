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
    deleteUser,
    testController
} = require("../controllers/userController");

router.route("/test").get(testController);


module.exports = router;