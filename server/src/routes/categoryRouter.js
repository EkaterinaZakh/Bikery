const express = require('express');
const { Category } = require('../../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
  });

// .post(verifyAccessToken, async (req, res) => {
//   try {
//     const newCat = await Category.create({ ...req.body, userId: res.locals.user.id });
//     const newCatWithUser = await Category.findOne({ where: { id: newCat.id }, include: User });
//     res.status(201).json(newCatWithUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Error while creating' });
//   }
// });

module.exports = router;
