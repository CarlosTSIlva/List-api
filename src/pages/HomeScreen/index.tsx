import React, { useState, useEffect } from "react";
import { Text, ScrollView, FlatList, View } from "react-native";

import { Container, Header, Conteudos, ImagemFilmes, Textos } from "./styles";
import api from "../../services/api";

interface Red {
  imagem: string;
}

const HomeScreen: React.FC<Red> = () => {
  const [filmes, Setfilmes] = useState<any[]>([]);

  useEffect(() => {
    api.get("posts").then((res) => {
      Setfilmes(res.data);
    });
  }, []);

  return (
    <ScrollView>
      <Header>Consumindo Api</Header>

      <FlatList
        data={filmes}
        keyExtractor={(filmes) => filmes.id}
        renderItem={({ item: filmes }) => (
          <Container>
            <Conteudos>
              <ImagemFilmes
                source={{
                  uri: `https://via.placeholder.com/600/${filmes.id}`,
                }}
              />
              <Textos>
                <Text>{filmes.title}</Text>
              </Textos>
            </Conteudos>
          </Container>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
