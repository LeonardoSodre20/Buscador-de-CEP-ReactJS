import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./css/main.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  const inputOnChange = (event) => {
    setInput(event.target.value);
  };
  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP..");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops!, Algum Erro aconteceu com a requisição...");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="container-input">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={inputOnChange}
        />
        <button className="button-search">
          <FiSearch size={25} color="white" onClick={handleSearch} />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            Cidade: {cep.localidade} / Estado: {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
