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
//rota para buscar todas as emoções
emocoesRouter.get("/", (req,res) => {
    return res.status(200).send(emocoes)
});

//rota para criar nova emoção
emocoesRouter.post("/", (req,res) => {
    const {nome, cor} = req.body
    const newemocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newemocao)
    return res.status(201).send(emocoes)
});

emocoesRouter.get("/:id", (req, res) => {
    const { id } = req.params;

    console.log(id);
    const emocao = emocoes.find( (emotion) => emotion.id == id )

    if (!emocao) {
        return res.status(404).send({
            message: "emoção não encontrada!",
        });
    }

    return res.status(200).send({
        message: "emoção encontrada", emocao,
    })
});

export default emocoesRouter

