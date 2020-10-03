import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
`;

export const Conteudos = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #b3f5f4f6;
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  width: 600px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ImagemFilmes = styled.Image`
  border-radius: 230px;
  width: 150px;
  height: 150px;
`;

export const Textos = styled.View`
  display: flex;
  align-items: center;
  margin-left: 30px;
  flex: 1;
  max-width: 150px;
`;
