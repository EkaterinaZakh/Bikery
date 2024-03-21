import express from 'express';
import { Fest, User } from '../../db/models';
import verifyAccessToken from '../middlewares/verifyAccessToken';

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

export default router;
