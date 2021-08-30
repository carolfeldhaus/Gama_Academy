const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNasc: { type: String, unique: false, required: true },
    profissao: { type: String, unique: false, required: true },
    estadocivil: { type: String, unique: false, required: true },
    genero: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    rua: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    celular: { type: String, unique: false, required: true },
    telfixo: { type: String, unique: false, required: true },
    teldois: { type: String, unique: false, required: true },
    contato: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    rg: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: true },
    habil: { type: String, unique: false, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);