import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormInput = styled.input`
border: 1px solid black rgb(3, 71, 73);

`;
const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;
const App = () => {

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:5000/register', form);
      if (user.status === 200) {
        alert('Cadastro realizado com sucesso!');
      }
    } catch (error) {
      alert('Preencha todos os campos obrigatórios')
      setCpfError(true);
    }
  }
  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    dataNasc: '',
    profissao: '',
    estadocivil: '',
    genero: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    celular: '',
    telfixo: '',
    teldois: '',
    contato: '',
    email: '',
    rg: '',
    cpf: '',
    veiculo: '',
    habil: '',
  });

  const [cpfError, setCpfError] = useState(false);

  async function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        document.getElementById('rua').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
        document.body.appendChild(script);
      }
      else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    }
    else {
      limpa_formulário_cep();
    }
  };
  function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
  }
  return (

    <div>

      <h1>DADOS PESSOAIS</h1>
      <p>
        <div>
          <label>Nome Completo<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, nome: e.target.value });
          }} value={form.nome}></FormInput>
        </div>
        <div>
          <label>Cargo<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, cargo: e.target.value });
          }} value={form.cargo}></FormInput>
        </div>
        <div><label>Data de Nascimento<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, dataNasc: e.target.value });
          }} value={form.dataNasc}></FormInput>
        </div>
        <div>
          <label>Profissão<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, profissao: e.target.value });
          }} value={form.profissao}></FormInput>
        </div>
        <div>
          <label>Estado Civil</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, estadocivil: e.target.value });
          }} value={form.estadocivil}></FormInput>
        </div>
        <div>
          <label>Gênero</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, genero: e.target.value });
          }} value={form.genero}></FormInput>
        </div>
        <div>
          <label>Cep<font color="red">*</font></label>
          <FormInput onBlur={() => {
            pesquisacep(document.getElementById("cep").value);
          }} onChange={(e) => {
            setForm({ ...form, cep: e.target.value });
          }} onfocusout = "defineCep()" value={form.cep} id="cep" ></FormInput>
        </div>
        <div>
          <label>Rua<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, rua: e.target.value });
          }} value={form.rua} id="rua"></FormInput>
        </div>
        <div>
          <label>Nº<font color="red">*</font></label></div>
        <FormInput onChange={(e) => {
          setForm({ ...form, numero: e.target.value });
        }} value={form.numero}></FormInput>
        <div>
          <label>Bairro<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, bairro: e.target.value });
          }} value={form.bairro} id="bairro"></FormInput>
        </div>
        <div>
          <label>Cidade<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, cidade: e.target.value });
          }} value={form.cidade} id="cidade"></FormInput>
        </div>
        <div>
          <label>UF<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, uf: e.target.value });
          }} value={form.uf} id="uf"></FormInput>
        </div>
        <div>
          <label>Celular<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, celular: e.target.value });
          }} value={form.celular}></FormInput></div>
        <div>
          <label>Telefone</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, telfixo: e.target.value });
          }} value={form.telfixo}></FormInput></div>
        <div>
          <label>Telefone Dois</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, teldois: e.target.value });
          }} value={form.teldois}></FormInput></div>
        <div>
          <label>Contato</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, contato: e.target.value });
          }} value={form.contato}></FormInput></div>
        <div>
          <label>Email<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }} value={form.email}></FormInput>
        </div>
        <div>
          <h1>DOCUMENTOS</h1>
          <label>RG<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, rg: e.target.value });
          }} value={form.rg}></FormInput>
        </div>
        <div>
          <label>CPF<font color="red">*</font></label>
          <FormInput onChange={(e) => {
            setForm({ ...form, cpf: e.target.value });
          }} value={form.cpf}></FormInput></div>
        <ErrorSpan isError={cpfError}>CPF já cadastrado</ErrorSpan>
        <div>
          <label>Possuí Habilitação?</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, habil: e.target.value });
          }} value={form.habil}></FormInput></div>
        <div>
          <label>Possuí Veículo?</label>
          <FormInput onChange={(e) => {
            setForm({ ...form, veiculo: e.target.value });
          }} value={form.veiculo}></FormInput>
        </div>
      </p>
      <button onClick={() => createCandidate()}>Confirmar Cadastro</button>

    </div>
  )

}
export default App;
