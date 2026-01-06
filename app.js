const express = require("express")
const app = express()
const mongoose = require("mongoose")


// db name = stayEaseDb
const MONGO_URL = "mongodb://127.0.0.1:27017/stayEaseDb"

main().then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL)
}

app.get("/",(req,res) => {
  res.send("root working")
})

app.listen(8080,() => {
    console.log('listening 8080');
    
})