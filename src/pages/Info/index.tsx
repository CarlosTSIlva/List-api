import React from "react";
import { Text, Button } from "react-native";
import { Container, Input, Butao, TextoPrincipal } from "./styles";

const Info: React.FC = () => {
  return (
    <Container>
      <TextoPrincipal>Tenha sempre as</TextoPrincipal>
      <TextoPrincipal>ultimas mensagens</TextoPrincipal>
      <Text>Assine para ter as ultimas noticias sobre tecnologias.</Text>
      <Input placeholder="Email" />
      <Butao>
        <Button
          title="Confirmar"
          color="#000000"
          onPress={() => alert("Informações salvas")}
        />
      </Butao>
    </Container>
  );
};

export default Info;
