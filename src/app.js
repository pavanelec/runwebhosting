const express = require("express");
require("../src/db/conn.js");

const  MensRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/mens",async(req, res) => {
    try{
        const addingMensRecords = new  MensRanking(req.body)
        console.log(req.body);
       const insertMens = await addingMensRecords.save();
       res.status(201).send(insertMens);
        }catch(e){
        res.status(400).send(e);
    }
   
})
//we will handel get request
app.get("/mens",async(req, res) => {
    try{
        const getMens = await MensRanking.find({});
       res.send(getMens);
        }catch(e){
        res.status(400).send(e);
    }
   
})
//we will handel get of indiv
app.get("/mens/:id",async(req, res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findById({_id});
       res.send(getMen);
        }catch(e){
        res.status(400).send(e);
    }
   
})

app.listen(port, () => {
    console.log(`connection is live at port no.${port}`);
})