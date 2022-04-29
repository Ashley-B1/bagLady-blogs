const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Post } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// get all users
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.findAll();

    return res.json(users);
  })
);

// get a specific user
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    return res.json(user);
  })
);

// get all posts from certain user
router.get(
  '/:id/posts',
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const posts = await Post.findAll({
      where: {
        userId: `${id}`
      }
    })

    return res.json(posts);
  })
);

// Sign up
router.post(
  '/',
  singleMulterUpload('image'),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const profilePic = await singlePublicFileUpload(req.file);
    const user = await User.signup({ email, username, password, profilePic });

    // console.log('------------------ PIC URL', profilePic); // https://bagladyblogredo.s3.amazonaws.com/1646849284068.jpeg

    setTokenCookie(res, user);

    // console.log('-------------------- USER OBJECT', user);

    return res.json({
      user,
    });
  }),
);

// update users info
router.put(
  '/:id',
  singleMulterUpload('image'),
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const {
      username,
      email,
      password,
    } = req.body;

    const user = await User.findByPk(userId);

    if (req.file) {
      const profilePic = await singlePublicFileUpload(req.file);
      user.update({
        username,
        password,
        email,
        profilePic
      });
    }

    user.update({
      username,
      email,
      password,
    });

    return res.json(user);
  })
);

// delete a user
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user= await User.findByPk(userId);

    await user.destroy();

    return res.json({ userId: user.id });
  })
);

module.exports = router;
