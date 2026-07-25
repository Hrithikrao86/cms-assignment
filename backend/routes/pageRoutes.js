const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
    createPage,
    getAllPages,
    getPageBySlug,
    updatePage,
    deletePage,
    getPageById,getPublishedPages
} = require("../controllers/pageController");

router.get("/published", getPublishedPages);

router.get("/id/:id", protect, getPageById);

router.post("/", protect, createPage);
router.get("/", protect, getAllPages);
router.get("/:slug", getPageBySlug);

router.put("/:id", protect, updatePage);
router.delete("/:id", protect, deletePage);
module.exports = router;