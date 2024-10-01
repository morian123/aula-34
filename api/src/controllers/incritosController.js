const { incritos } = require("../mock/dados.json");
const Inscrito = require("../models/Inscrito");

class incritosController {


/*index: lista todos os incritos*/
index(req, res) {
    try {
    res.status(200).json(incritos);
    } catch (error) {
    res.status(500).json({ error: "Erro ao listar inscritos" });
    }
}


/* show: Retorna um inscrito com base no ID fornecido nos parâmetros da URL*/
show(req, res) {
    const { id } = req.params;
    const inscrito = incritos.find((i) => i.id === parseInt(id));
    if (inscrito) {
    res.status(200).json(inscrito);
    } else {
    res.status(404).json({ error: "Inscrito não encontrado" });
    }
}


/* store: Cria um novo inscrito*/
store(req, res) {
    const novoInscrito = new Inscrito(req.body);
    incritos.push(novoInscrito);
    res.status(201).json(novoInscrito);
}


/* update: Atualiza um inscrito*/
update(req, res) {
    const { id } = req.params;
    const index = incritos.findIndex((i) => i.id === parseInt(id));
    if (index !== -1) {
    const inscritoAtualizado = { ...incritos[index], ...req.body };
    incritos[index] = inscritoAtualizado;
    res.status(200).json(inscritoAtualizado);
    } else {
    res.status(404).json({ error: "Inscrito não encontrado" });
    }
}


delete(req, res) {
    const { id } = req.params;
    const index = incritos.findIndex((i) => i.id === parseInt(id));
    if (index !== -1) {
    incritos.splice(index, 1);
    res.status(200).json({ message: "Inscrito removido com sucesso" });
    } else {
    res.status(404).json({ error: "Inscrito não encontrado" });
    }
}
}

module.exports = new incritosController();
