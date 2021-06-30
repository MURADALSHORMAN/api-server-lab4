'use strict';
const express = require('express');
const clothesRouter = express.Router();
const clothesModel = require('../models/clothes');
const Collection = require('../models/data-collection-class');
const clothes = new Collection(clothesModel);

clothesRouter.get('/', getclothes);
clothesRouter.get('/:id', getclothes);
clothesRouter.post('/', createclothes);
clothesRouter.put('/:id', updateclothes);
clothesRouter.delete('/:id', deleteclothes);

async function getclothes(req, res, next) {
  try {
    const id = req.params.id;
    const clothe = await clothes.read(id);
    res.json({ clothe });
  } catch (e) {
    next(e);
  }
}

async function createclothes(req, res, next) {
  try {
    const data = req.body;
    const newclothes = await clothes.create(data);
    res.json(newclothes);
  } catch (e) {
    next(e);
  }
}
async function updateclothes(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newclothes = await clothes.update(id, data);
    res.json(newclothes);
  } catch (e) {
    next(e);
  }
}
async function deleteclothes(req, res, next) {
  try {
    const id = req.params.id;
    const deletedclothes = await clothes.delete(id);
    res.json('deleted clothes');
  } catch (e) {
    next(e);
  }
}
module.exports = clothesRouter;