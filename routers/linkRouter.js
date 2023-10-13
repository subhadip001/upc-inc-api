const express = require("express");
const router = express.Router();
const {
    createNewLink,
    deleteLink,
    getAllLinks,
    testController,
    deleteAll
} = require("../controllers/linkController");

router.route("/testlinkRouter").get(testController);
router.route('/createLink').post(createNewLink)
router.route('/deleteLinks').delete(deleteLink)
router.route('/getLinks').get(getAllLinks)
router.route('/deleteAllLinks').delete(deleteAll)

module.exports = router;
