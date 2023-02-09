import {
  ContainerInformationsCep,
  ContainerTitleAndInput,
  InputCep,
  TitleMain,
} from "./styles";
import api from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [infoCep, setInfoCep] = useState([]);
  const [cepUser, setCepUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getInfoByCep = async () => {
    const response = await api.get(`${cepUser}/json`);
    setInfoCep(response?.data);
  };

  return (
    <ContainerInformationsCep>
      <ContainerTitleAndInput>
        <TitleMain>Buscador de CEP</TitleMain>
        <InputCep onChange={(ev) => setCepUser(ev.target.value)} />
        <button
          onClick={() => {
            getInfoByCep();
            setIsLoading(false);
          }}
        >
          Buscar
        </button>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <ul>
            <li>{infoCep.cep}</li>
            <li>{infoCep.logradouro}</li>
            <li>{infoCep.bairro}</li>
            <li>{infoCep.localidade}</li>
            <li>{infoCep.uf}</li>
          </ul>
        )}
      </ContainerTitleAndInput>
    </ContainerInformationsCep>
  );
};

export default Home;
