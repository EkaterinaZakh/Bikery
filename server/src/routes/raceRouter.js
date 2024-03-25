const express = require('express');
const { Race, User, RaceRating } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const races = await Race.findAll({
      order: [['id', 'DESC']],
      include: [User, RaceRating],
    });

    res.json(races);
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const newRace = await Race.create({ ...req.body, userId: res.locals.user.id });
      const newRaceWithUser = Race.findOne({ where: { id: newRace.id }, include: User });
      res.status(201).json(newRaceWithUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error while creating' });
    }
  });

router.route('/:id').delete(verifyAccessToken, async (req, res) => {
  await Race.destroy({
    where: { id: req.params.id },
  });
  res.sendStatus(200);
});

router.route('/:id/rating').post(async (req, res) => {
  try {
    const newRate = await RaceRating.create(req.body);
    const newRateWithUser = RaceRating.findOne({ where: { id: newRate.id }, include: User });
    res.status(201).json(newRateWithUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error while creating' });
  }
});

module.exports = router;
