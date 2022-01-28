const app=require('express')
//const todorouter=require('./routes')

port=5757
const todoapp=app()
todoapp.use('/routes',require('./routes/'))
todoapp.listen(port,()=>{
    console.log('hi iam listeng')
})
