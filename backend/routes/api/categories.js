const express = require('express');
const asyncHandler = require('express-async-handler');

const { Category, Post } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

// get all categories
router.get(
  '/',
  restoreUser,
  asyncHandler(async (req, res) => {
    const categories = await Category.findAll();

    return res.json(categories);
  })
);

// get all posts under a specific category
router.get(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const catId = req.params.id;

    const posts = await Post.findAll({
      where: {
        categoryId: `${catId}`
      }
    });

    return res.json(posts)
  })
);

module.exports = router
