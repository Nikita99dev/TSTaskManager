const express = require('express');

const { User, todo} =  require('../db/models')
const router = express.Router();


router.post('/signup', async (req, res) => {
  console.log('BACK', req.body);
  const { username, password,  email} = req.body;

  
  try{
    const curUser = await User.findOne({where: {email}})
    console.log(curUser)
    if(curUser){
      return res.status(500).json({'exist': true})
    } else {
      console.log({username, password, email})
      const user = await User.create({username, password, email})
      res.json(user.id)
    }
  }
  catch(e){
    res.json(e)
  }
});

router.post('/login', async (req, res)=> {
  console.log(req.body)
  const {email, password} = req.body.values
  console.log(email, password)

  try {
    const user = await User.findOne({where: {email, password}})
    console.log(user)
    if(user){
      req.session.username = user.name
      req.session.uid = user.id
      return res.json({username: user.name, userId: user.id })
    } else {
      return res.status(500).res.json({error: 'wrong_data'})
    }
  } catch (error) {
    res.json({error})
  }
})

module.exports = router
