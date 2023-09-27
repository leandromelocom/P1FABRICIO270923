const express = require('express')
const app=express()
app.get('/', (async (req,res) => {
    const helloWorld = {
        errors: [],
        content: {
            message:"Hello world"
        }
    }
    res.send(helloWorld);
}))
app.listen(3000,() => {
    console.log("listen on port 3000")
})