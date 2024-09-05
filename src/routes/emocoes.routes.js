import { Router } from "express";

const emocoesRouter = Router()
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

emocoesRouter.get("/", (req,res) => {
    return res.status(200).send(emocoes)
});

emocoesRouter.post("/", (req,res) => {
    const {nome, cor} = req.body
    const newEmotion = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newemocao)
    return res.status(200).send(emocoes)
});

export default emocoesRouter

