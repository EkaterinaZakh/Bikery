const express = require('express');
const { Category } = require('../../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
  });

module.exports = router;
