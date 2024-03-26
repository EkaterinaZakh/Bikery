const express = require('express');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const { User, CommentFest } = require('../../db/models');

const router = express.Router();

router.get('/fests/:festId', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    return res.status(400).json({ error: 'id is invalid' });
  }
  try {
    const comments = await CommentFest.findAll({
      where: { festId: id },
      include: { model: User, attributes: ['id', 'name'] },
    });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/fests/:festId', verifyAccessToken, async (req, res) => {
  const { festId } = req.params; // Правильно получаем raceId из параметров маршрута
  console.log(req.params);
  const { text } = req.body;
  if (Number.isNaN(Number(festId))) {
    // Проверяем raceId, а не id
    return res.status(400).json({ error: 'raceId is invalid' }); // Возвращаем ошибку для festId
  }
  try {
    const newComment = await CommentFest.create({
      text,
      userId: res.locals.user.id,
      festId, // Используем festId
    });
    const commentWithAuthor = await CommentFest.findOne({
      where: { id: newComment.id },
      include: {
        model: User,
        attributes: ['id', 'name'],
      },
    });
    res.json(commentWithAuthor);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
