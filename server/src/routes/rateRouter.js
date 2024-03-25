// const express = require('express');
// const { RaceRating, User } = require('../../db/models');

// const router = express.Router();

// router.route('/').get(async (req, res) => {
//   const ratingAll = await RaceRating.findAll({
//     order: [['id', 'DESC']],
//     include: User,
//   });

//   res.json(ratingAll);
// });

// router.route('/:id').post(async (req, res) => {
//   try {
//     const newRate = await RaceRating.create({ ...req.body, userId: res.locals.user.id });
//     const newRateWithUser = RaceRating.findOne({ where: { id: newRate.id }, include: User });
//     res.status(201).json(newRateWithUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Error while creating' });
//   }
// });

// module.exports = router;
