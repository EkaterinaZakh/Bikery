const express = require('express');
const { Fest, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const fests = await Fest.findAll({
      order: [['id', 'DESC']],
      include: User,
    });
    console.log('---', fests);
    res.json(fests);
  })

  .post(verifyAccessToken, async (req, res) => {
    try {
      const newFest = await Fest.create({ ...req.body, userId: res.locals.user.id });
      const newFestWithUser = await Fest.findOne({ where: { id: newFest.id }, include: User });
      res.status(201).json(newFestWithUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error while creating' });
    }
  });

module.exports = router;
