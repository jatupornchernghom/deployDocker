const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()


const pool = mysql.createPool({
    host :process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    
})

const app = express(cors())


app.get('/hi',(req,res,next)=>{
    res.json({msg: 'สวัสดีค้ายยยยบบบบบบ'})

})

app.get('/attractions', (req,res,next) =>{
    pool.query('SELECT * FROM attractions',(err,rows,fields) =>{
        
        res.json(rows)
        
    })
})

app.listen(5000,()=>{
  console.log('Server is Runing on port 5000')
})
