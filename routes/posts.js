const express=require('express')
//const app=express()
const todorouter=express.Router()
postscon=require('../controllers/postscontroler')
todorouter.get('/',postscon)
module.exports=todorouter
