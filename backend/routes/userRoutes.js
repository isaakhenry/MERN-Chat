const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");

router.post('/login', authUser);
router.route("/").post(registerUser).get(protect, allUsers);

module.exports = router;