const express = require('express');
require('./config/dbconfig');
require('./controllers/books')
const cors = require('cors');
const routes = require('./routes/index')

const app = express()
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())
app.use(cors());

app.use("/",routes);



const port = 8000;

// app.get('/',(req,res)=>{
//     res.send("Hello World!")
// })

app.listen(port,()=>{
    console.log("I am up");
})