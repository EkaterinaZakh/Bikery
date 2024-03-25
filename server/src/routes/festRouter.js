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

router.route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    try {
      await Fest.destroy({
        where: { id: req.params.id },
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'ERROR DELETING FEST' });
    }
  })
  .put(verifyAccessToken, async (req, res) => {
    try {
      const targetFest = await Fest.findOne({ where: { id: req.params.id }, include: User });
      if (!targetFest) {
        res.status(404).json({ message: 'Fest not found' });
      }
      Object.keys(req.body).forEach((key) => {
        targetFest[key] = req.body[key];
      });
      await targetFest.save();
      res.json(targetFest);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'ERROR UPDATING FEST' });
    }
  })
  .get(async (req, res) => {
    try {
      const fest = await Fest.findOne({ where: { id: req.params.id }, include: User });
      if (!fest) {
        return res.status(404).json({ message: 'Fest not found' });
      }
      return res.json(fest);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'ERROR GETTING FEST' });
    }
  });

module.exports = router;
