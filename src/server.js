import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Alegria",
        cor: "Amarela"
    },

    {
        id: 2,
        nome: "Nojinho",
        cor: "Verde"
    },

    {
        id: 3,
        nome: "Ansiedade",
        cor: "Laranja"
    },
]

const personagens = [
    {
        id: 100,
        nome: "pateta",
        studio: "disney",
        vivo: true
    },

    {
        id: 101,
        nome: "bob esponja",
        studio: "nickelodeon",
        vivo: true
    },

    {
        id: 102,
        nome: "patrick",
        studio: "nickelodeon",
        vivo: true
    },


]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World" })
})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World" })
})

app.get("/emocoes", (req, res) => {
    return res.status(200).send( emocoes )
})

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})

app.listen(serverPort, () => {
    console.log(`🎀 Server started on http://localhost:${serverPort}`)
})