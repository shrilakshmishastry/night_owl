require('dotenv').config()

const harperive = require('harperive')

console.log(process.env.USERNAME,)
const DB_CONFIG = {
 harperHost: process.env.HOST,
 username: process.env.USERNAME,
 password:process.env.PASSWORD,
 schema: process.env.SCHEMA   
}

const options = `select * from dev.dog`;

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

// client.dbOperation(options,(err,res)=>{
//     if(err) console.log(err);
//     else console.log(res);
// })

// db.query(options)
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log("error")
//     console.log(err)
// })

// async function executeQuery() {
//     try{
//         const res = await db.query(options)
//         console.log(res)
//     }catch(e){
//         console.log("error")
//         console.log(e);
//     }
// }

// executeQuery();

module.exports = db;