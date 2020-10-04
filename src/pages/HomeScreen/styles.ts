import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.Text`
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
`;

export const Conteudos = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
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
