const express = require('express');

const { User, todo} =  require('../db/models')
const router = express.Router();


router.post('/signup', async (req, res) => {
  console.log('BACK', req.body);
  const { username, password,  email} = req.body;
  console.log(money)
  
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

module.exports = router
