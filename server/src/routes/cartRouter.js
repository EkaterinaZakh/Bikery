const express = require('express');
const { User, Cart, Product } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const carts = await Cart.findAll({
        order: [['id', 'ASC']],
        include: [User, Product],
      });
      res.json(carts);
    } catch (error) {
      console.error(`Error fetching carts: ${error}`);
      res.status(500).json({ error: 'Error fetching carts' });
    }
  });

router
  .route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    try {
      await Cart.destroy({
        where: { productId: req.params.id },
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'ERROR DELETING PRODUCT FROM CART' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    const iddd = req.params.id;
    try {
      const newItemCart = await Cart.create({ productId: +iddd, userId: res.locals.user.id }, {
        returning: true,
      });

      const newItemCartWithUser = await Cart.findOne({
        where: { id: newItemCart.id },
        include: [User, Product],
      });
      res.status(200).json(newItemCartWithUser);
    } catch (error) {
      console.error('Error while creating:', error);
      res.status(500).json({ message: 'Error while creating' });
    }
  });

module.exports = router;
