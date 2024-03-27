const express = require('express');
const { User, Cart, Product } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const carts = await Cart.findAll({
        order: [['id', 'DESC']],
        include: [User, Product],
      });
      res.json(carts);
    } catch (error) {
      console.error(`Error fetching carts: ${error}`);
      res.status(500).json({ error: 'Error fetching carts' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const newItemCart = await Cart.create({ productId, quantity, userId: res.locals.user.id });
      const newFItemCartWithUser = await Cart.findOne({
        where: { id: newItemCart.id },
        include: [User, Product],
      });
      res.status(200).json(newFItemCartWithUser);
    } catch (error) {
      console.error('Error while creating:', error);
      res.status(500).json({ message: 'Error while creating' });
    }
  });

module.exports = router;
