import React from "react";
import {Text} from "react-native";
import {Container, Input, TextoPrincipal} from "./styles";

const Info: React.FC = () => {
  return (
    <Container>
      <TextoPrincipal>Tenha sempre as</TextoPrincipal>
      <TextoPrincipal>ultimas mensagens</TextoPrincipal>
      <Text>Assine para ter as ultimas noticias sobre tecnologias.</Text>
      <Input placeholder="Email" />
    </Container>
  );
};

export default Info;
