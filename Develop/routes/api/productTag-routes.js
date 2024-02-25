const express = require('express');
const router = express.Router();
const { ProductTag } = require('../models');

router.post('/', async (req, res) => {
    try {
      const newProductTag = await ProductTag.create({
        product_id: req.body.product_id,
        tag_id: req.body.tag_id
      });
      res.status(200).json(newProductTag);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const productTags = await ProductTag.findAll();
      res.json(productTags);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
