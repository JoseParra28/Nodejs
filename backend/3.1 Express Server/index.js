import express from 'express'

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1> Hello Jose</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1> Hello whats up</h1><p>My name is Jose Parra</p>")
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})

