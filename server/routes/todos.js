const e = require("express");
const express = require("express");
const { todo } = require("../db/models");
const router = express.Router();

router.post("/addTodos", async (req, res) => {
  console.log(req.body);

  const { content, isDone } = req.body;

  console.log(content, isDone);
  console.log(req.session.uid)

  try {
    const todo1 = await todo.create({ content,isDone, userId: req.session.uid });
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


router.post("/changeTodo", async (req, res) => {

  console.log(req.body)
  const { id } = req.body
  console.log(id)
   try {
    const find = await todo.findOne({where: {id}}, {raw: false})
    if(find.dataValues.isDone == false){
      find.isDone = true
    } else {
      find.dataValues.isDone = false
    }
    console.log(find.dataValues.isDone)
    const change = await todo.update({isDone: find.dataValues.isDone}, {where: {id: +id}})

    if(change[0]){
      res.json(find.dataValues.isDone)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.json(error)
  }
})

router.get("/fetchAll/:id", async (req, res) => {
  console.log(req.params)
  const { id } = req.params
  console.log(id)
  try {
    const todos = await todo.findAll({where: {userId: +id},  order: [['id', 'DESC']] }, {limit: 5})
    console.log(todos)
    if(todos.length){
      res.json(todos)
    }
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
