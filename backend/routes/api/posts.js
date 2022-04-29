const express = require('express');
const asyncHandler = require('express-async-handler');

const { Post, Category } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

const validatePost = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Post must have title!'),
  check('userId')
  .exists({ checkFalsy: true })
  .withMessage('Please make sure you are logged in'),
  check('content')
  .exists({ checkFalsy: true })
  .withMessage('Please tell us what your post is about.'),
  check('categoryId')
  .exists({ checkFalsy: true })
  .withMessage('Please pick proper category.'),
];

// get all posts
router.get(
  '/',
  restoreUser,
  asyncHandler(async (req,res) => {
    const posts = await Post.findAll();

    return res.json(posts);
  })
);

// get specific post
router.get(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const postId = req.params.id;

    const post = await Post.findOne({
      where: {
        id: `${postId}`
      }
    });

    return res.json(post);
  })
);

// create a post
router.post(
  '/',
  restoreUser,
  singleMulterUpload('image'),
  validatePost,
  asyncHandler(async (req, res) => {
    const {
      userId,
      content,
      title,
      category
    } = req.body;

    const photo = await singlePublicFileUpload(req.file);

    const postCategory = await Category.findOne({
      where: {
        name: category
      }
    })

    const post = await Post.write({
      userId,
      content,
      title,
      photo,
      categoryId: postCategory.id
    });

    return res.json(post)
  })
);

// update post
router.put(
  '/:id',
  restoreUser,
  singleMulterUpload('image'),
  asyncHandler(async (req, res) => {
    const postId = req.params.id;

    const {
      content,
      title,
      category
    } = req.body;

    const postCategory = await Category.findOne({
      where: {
        name: category
      }
    });

    if (req.file) {
      const photo = await singlePublicFileUpload(req.file);
      post.update({
        content,
        title,
        photo,
        categoryId: postCategory.id
      });
    }

    const post = await Post.findByPk(postId);

    post.update({
      content,
      title,
      categoryId: postCategory.id
    });

    return res.json(post);
  })
)

// delete a post
router.delete(
  '/:id',
  restoreUser,
  asyncHandler(async (req, res) => {
    const postId = req.params.id;

    const post = await Post.findByPk(postId);

    await post.destroy();

    return res.json({ postId: post.id });
  })
);


module.exports = router
