const express = require('express');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const { User, CommentRace } = require('../../db/models');

const router = express.Router();

// написать эндпоинт, который вытащит вообще все комменты
// GET /api/comments

// /:id -> /races/:raceId
router.get('/races/:raceId', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    return res.status(400).json({ error: 'id is invalid' });
  }
  try {
    const comments = await CommentRace.findAll({
      where: { raceId: id },
      include: { model: User, attributes: ['id', 'name'] },
    });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// :id -> /races/:raceId
// router.post('/races/:raceId', verifyAccessToken, async (req, res) => {
//   const { id } = req.params;
//   const { commit } = req.body;
//   if (Number.isNaN(Number(id))) {
//     return res.status(400).json({ error: 'id is invalid' });
//   }
//   try {
//     const newComment = await CommentRace.create({
//       text: commit,
//       userId: res.locals.user.id,
//       raceId: id,
//     });
//     const commentWithAuthor = await CommentRace.findOne({
//       where: { id: newComment.id },
//       include: {
//         model: User,
//         attributes: ['id', 'name'],
//       },
//     });
//     res.json(commentWithAuthor);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

router.post('/races/:raceId', verifyAccessToken, async (req, res) => {
  const { raceId } = req.params; // Правильно получаем raceId из параметров маршрута
  console.log(req.params);
  const { text } = req.body;
  if (Number.isNaN(Number(raceId))) {
    // Проверяем raceId, а не id
    return res.status(400).json({ error: 'raceId is invalid' }); // Возвращаем ошибку для raceId
  }
  try {
    const newComment = await CommentRace.create({
      text,
      userId: res.locals.user.id,
      raceId, // Используем raceId
    });
    const commentWithAuthor = await CommentRace.findOne({
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
