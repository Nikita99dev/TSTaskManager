const express = require("express");
const { todo } = require("../db/models");
const router = express.Router();

router.post("/addTodos", async (req, res) => {
  console.log(req.body);

  const { content, isDone } = req.body;

  console.log(content, isDone);
  console.log(req.session.uid)

  try {
    const todo1 = await todo.create({ content,isDone, userId: +req.session.uid });
    console.log('====>', todo1.dataValues);
    if (todo1.dataValues.content) {
      res.json(todo1);
    } else {
      res.status(500).json("error");
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
