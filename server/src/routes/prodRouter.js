const express = require('express');
const sharp = require('sharp');
const fs = require('fs/promises');
const { Product } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const upload = require('../middlewares/upload');

const prodRouter = express.Router();

prodRouter.route('/').get(async (req, res) => {
  const products = await Product.findAll({
    order: [['id', 'DESC']],
  });
  res.json(products);
});

prodRouter.route('/:id').put(verifyAccessToken, upload.single('image'), async (req, res) => {
  const { id } = req.params;

  const imageName = `${Date.now()}_prod_edited.jpeg`;
  const outputBuffer = await sharp(req.file.buffer).jpeg().toBuffer();
  await fs.writeFile(`./public/img/product/${imageName}`, outputBuffer);

  await Product.update({ ...req.body, image: imageName }, { where: { id } });
  const updatedProduct = await Product.findOne({ where: { id } });
  res.json(updatedProduct);
});

prodRouter.route('/add').post(verifyAccessToken, upload.single('image'), async (req, res) => {
  const { name, desc, price, categoryId } = req.body;

  if (!name || !desc || !req.file || !price || !categoryId) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  try {
    // Имя файла для сохранения
    const imageName = `${Date.now()}_prod.jpeg`;
    // Обработка и сохранение файла с новым именем
    const outputBuffer = await sharp(req.file.buffer).jpeg().toBuffer();
    await fs.writeFile(`./public/img/product/${imageName}`, outputBuffer);
    const newProd = await Product.create({
      name,
      desc,
      price,
      image: imageName,
      categoryId,
    });
    res.status(201).json(newProd);
  } catch (error) {
    res.status(500).json({ meassage: 'Ошибка при создании нового товара' });
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

module.exports = prodRouter;