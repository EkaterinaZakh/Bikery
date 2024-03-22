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
    // console.log('---', fests);
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

router
  .route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    await Fest.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(200);
  })
  .put(verifyAccessToken, async (req, res) => {
    try {
      const targetChar = await Fest.findOne({ where: { id: req.params.id }, include: User });
      for (const key in req.body) {
        if (Object.hasOwnProperty.call(req.body, key)) {
          targetChar[key] = req.body[key];
        }
      }
      await targetChar.save();
      res.json(targetChar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'ERROR EDITING CHAR' });
    }
  })
  .get(async (req, res) => {
    const char = await Fest.findOne({ where: { id: req.params.id }, include: User });
    res.json(char);
  });

module.exports = router;
