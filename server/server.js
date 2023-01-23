const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = mongoose;
const app = express()
const port = 8000;
app.use(cors())
app.use(bodyParser.json())
const customersSchema = new Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, required: true},
})
const Customer = mongoose.model("customer", customersSchema)
app.get("/customer", (req, res) => {
    Customer.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        }
        else{
            res.status(500).json({ message: "Not Found"})
        }
    })
})
app.get("/customer/:id", (req, res) => {
    const { id } = req.params
    Customer.findById( id, (err, docs) => {
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Not found"})
        }
    })
})
app.delete("/customer/:id", (req, res) => {
    const { id } = req.params
    Customer.findByIdAndDelete(id, (err) => {
        if(!err){
            res.send("Delete")
        }else {
            res.status(404).json({ message: err})
        }
    })
})
app.post("/customer", (req, res) => {
    let customers = new Customer({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    })
    customers.save()
    res.send({ message: "Post Customer"})
})

mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/AF202",
    err => {
        if(!err){
            console.log("DB CONNECT");
            app.listen(port , () => {
                console.log(`http://localhost:${port}`);
            })
        }
    }
)