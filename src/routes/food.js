'use strict';
const express = require('express');
const foodRouter = express.Router();
const foodModel = require('../models/food');
const Collection = require('../models/data-collection-class');
const food = new Collection(foodModel);

foodRouter.get('/', getfood);
foodRouter.get('/:id', getfood);
foodRouter.post('/', createfood);
foodRouter.put('/:id', updatefood);
foodRouter.delete('/:id', deletefood);

async function getfood(req, res, next) {
  try {
    const id = req.params.id;
    const foods = await food.read(id);
    res.json({ foods });
  } catch (e) {
    next(e);
  }
}

async function createfood(req, res, next) {
  try {
    const data = req.body;
    const newfood = await food.create(data);
    res.json(newfood);
  } catch (e) {
    next(e);
  }
}
async function updatefood(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newfood = await food.update(id, data);
    res.json(newfood);
  } catch (e) {
    next(e);
  }
}
async function deletefood(req, res, next) {
  try {
    const id = req.params.id;
    
    const deletedfood = await food.delete(id);
     res.json('deletedfood');
  } catch (e) {
    next(e);
  }
}
module.exports = foodRouter;