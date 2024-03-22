const express = require('express');
const { Product } = require('../../db/models');

const prodRouter = express.Router();

prodRouter.route('/').get(async (req, res) => {
  const products = await Product.findAll({
    order: [['id', 'DESC']],
  });
  res.json(products);
});

module.exports = prodRouter;
