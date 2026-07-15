// to create a server

const express = require("express") 

const app = express()

app.use(express.json())


/*

note = {
    title : "my first note",
    description : "this is my first note"
}


const notes = {
    {
        title : "my first note",
        description : "this is my first note"
    },
    {
        title : "my first note",
        description : "this is my first note"
    },
    {
        title : "my first note",
        description : "this is my first note"
    },
}

*/

const notes = []

/* title, description */

app.post('/notes', (req,res)=>{
    notes.push(req.body)


    res.status(201).json({
        message : "note created successfully"
    })
})

module.exports = app