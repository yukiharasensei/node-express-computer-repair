const express = require("express");
const router = express.Router();

const staffUserControllers = require("../controllers/staff_user");

router.get("/", staffUserControllers.staff_get_full);
router.post("/signup", staffUserControllers.staff_user_signup);
router.post("/login", staffUserControllers.staff_login);
router.delete("/:staffId", staffUserControllers.staff_user_delete);
router.patch("/change-pass/:staffId", staffUserControllers.staff_user_patch);

module.exports = router;
