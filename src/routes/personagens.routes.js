import { Router } from "express";

const personagensRouter = Router()
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

personagensRouter.get("/", (req, res) => {
    return res.status(200)
    .send(personagens)
})

personagensRouter.post("/", (req,res) => {
    const {nome, studio, vivo} = req.body;
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo,
    };

    personagens.push(novoPersonagem)
    return res.status(201).send(novoPersonagem);
});

personagensRouter.delete("/:id", (req, res)=>{
    const { id } = req.params;
    const personagem = personagem.find((person)=> person.id == id);

    if (!personagem) {
        return res.status(404).send({
            message: "personagem não encontrado!",
        });
    }

    personagens = personagens.filter((person)=> person.id != id)

    return res.status(200).send({
        message: "personagem deletado!", 
        personagens
    });
});

export default personagensRouter;