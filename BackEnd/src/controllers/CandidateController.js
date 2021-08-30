const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dataNasc, profissao,
            estadocivil, genero, cep, rua, numero, bairro, cidade, uf,
            celular, telfixo, teldois, contato, email, rg, cpf, veiculo, habil } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNasc = dataNasc;
        newCandidate.profissao = profissao;
        newCandidate.estadocivil = estadocivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.telfixo = telfixo;
        newCandidate.teldois = teldois;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habil = habil;
        
        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro ao cadastrar usuário!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};