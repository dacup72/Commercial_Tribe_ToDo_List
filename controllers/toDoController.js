const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.TodoItems
      .find({})
      .then(todos => res.json(todos))
      .catch((err) => res.status(500).json(err))
  },
  createItem: (req, res) => {
    db.TodoItems
      .create(req.body)
      .then(todo => res.json(todo))
      .catch(err => res.status(500).json(err))
  },
  deleteItem: (req, res) => {
    db.TodoItems
      .deleteOne({_id: req.params.id})
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).json(err))
  },
  updateItem: (req, res) => {
    db.TodoItems
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(todo => res.json(todo))
      .catch(err => res.sendStatus(501).json(err))
  }
}