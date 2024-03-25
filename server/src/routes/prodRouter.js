const express = require('express');
const { Product } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const prodRouter = express.Router();

prodRouter.route('/').get(async (req, res) => {
  const products = await Product.findAll({
    order: [['id', 'DESC']],
  });
  res.json(products);
});

prodRouter.route('/').post(verifyAccessToken, async (req, res) => {
  try {
    const newProd = await Product.create({ ...req.body, userId: res.locals.user.id });
    res.status(201).json(newProd);
  } catch (error) {
    res.status(500).json({ meassage: 'Erroe while creating new Product' });
  }
});

prodRouter.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ mesage: 'deleted' });
  } catch (err) {
    res.sendStatus(500);
  }
});

prodRouter.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  if (!name || !desc || !price || !image) {
    res.status(401).json({ message: 'Wrong product data' });
    return;
  }
  await Product.update(req.body, { where: { id } });
  const updatedProduct = await Product.findOne({ where: { id } });
  res.json(updatedProduct);
});

// prodRouter.router('/').post(fileMiddleware.single('avatar'), (req, res) => {
//   try {
//     if(req,file) {
//       res.json(req.file)
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = prodRouter;
