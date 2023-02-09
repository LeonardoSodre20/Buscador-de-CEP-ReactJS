import styled from "styled-components";

export const ContainerInformationsCep = styled.div`
  background-color: #1637b7;
  height: 500px;
  width: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5em;
  position: relative;
`;

export const ContainerTitleAndInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5em;
  position: absolute;
  top: 25px;
  width: 100%;
`;

export const TitleMain = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 1.7em;
`;

export const InputCep = styled.input`
  background-color: rgba(255, 255, 255, 0.75);
  color: #1637b7;
  font-weight: 700;
  font-size: 1em;
  outline: none;
  border: none;
  padding: 0.5rem;
  width: 85%;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
`;
