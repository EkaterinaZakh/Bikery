const express = require('express');
const { Race, User, CommentRace, RaceRating } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const races = await Race.findAll({
      order: [['id', 'DESC']],
      include: [User, CommentRace, RaceRating],
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

  router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const { name, desc, image, length, rateCounter } = req.body;
    if (!name || !desc || !image || !length || !rateCounter) {
      res.status(401).json({ message: 'Wrong product data' });
      return;
    }

    await Race.update(req.body, { where: { id } });
    const updateRace = await Race.findOne({ where: { id } });
    res.json(updateRace);
  });
});

module.exports = router;
