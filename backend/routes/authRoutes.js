const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Auth Route Working",
    });
});

router.get("/profile", protect, (req, res) => {
    res.json({
        success: true,
        admin: req.admin,
    });
});

module.exports = router;