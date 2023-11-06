import express from 'express'

const app = express();

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send("draw a duck")
})

app.listen(port, () =>{
console.log(`example app listening on port ${port}`)
})