const Page = require("../models/Page");

const createPage = async (req, res) => {
    try {
        const { title, slug, content, status } = req.body;

        // Check if slug already exists
        const existingPage = await Page.findOne({ slug });

        if (existingPage) {
            return res.status(400).json({
                success: false,
                message: "Slug already exists",
            });
        }

        const page = await Page.create({
            title,
            slug,
            content,
            status,
        });

        res.status(201).json({
            success: true,
            message: "Page created successfully",
            page,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllPages = async (req, res) => {
  try {
    let query = {};

    // Public users only see published pages
    if (!req.user) {
      query.status = "published";
    }

    const pages = await Page.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: pages.length,
      pages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPublishedPages = async (req, res) => {
  try {
    const pages = await Page.find({
      status: "published",
    }).select("title slug");

    res.status(200).json({
      success: true,
      pages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPageBySlug = async (req, res) => {
    try {
        const page = await Page.findOne({
            slug: req.params.slug,
            status: "published",
        });

        if (!page) {
            return res.status(404).json({
                success: false,
                message: "Page not found",
            });
        }

        res.status(200).json({
            success: true,
            page,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updatePage = async (req, res) => {
    try {
        const { id } = req.params;

        const page = await Page.findById(id);

        if (!page) {
            return res.status(404).json({
                success: false,
                message: "Page not found",
            });
        }

        const updatedPage = await Page.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "Page updated successfully",
            page: updatedPage,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deletePage = async (req, res) => {
    try {
        const { id } = req.params;

        const page = await Page.findById(id);

        if (!page) {
            return res.status(404).json({
                success: false,
                message: "Page not found",
            });
        }

        await Page.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Page deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getPageById = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    res.status(200).json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    createPage,
    getAllPages,
    getPageBySlug,
    updatePage,
    deletePage,
    getPageById,
    getPublishedPages
};