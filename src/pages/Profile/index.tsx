import React from "react";
import {View, Button, Text} from "react-native";

import {Container, ImageI, Imput, Butao} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <ImageI
        source={{
          uri:
            "https://avatars3.githubusercontent.com/u/63177558?s=460&u=a88f60141873e8101d3ac3d662a9cd7a63e3f731&v=4",
        }}
      />
      <View>
        <Imput placeholder="Nome" />
        <Imput placeholder="Endereço" />
        <Imput placeholder="Idade" />
        <Butao>
          <Button
            title="Confirmar"
            color="#000000"
            onPress={() => alert("Informações salvas")}
          />
        </Butao>
      </View>
    </Container>
  );
};

export default Profile;
