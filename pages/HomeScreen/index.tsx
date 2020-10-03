import React, { useState, useEffect } from "react";
import { Text, ScrollView, FlatList, View } from "react-native";

import { Container, Header, Conteudos, ImagemFilmes, Textos } from "./styles";
import api from "../services/api";

interface Red {
  imagem: string;
}

const HomeScreen: React.FC<Red> = () => {
  const [filmes, Setfilmes] = useState<any[]>([]);

  useEffect(() => {
    api.get("/eventos").then((res) => {
      Setfilmes(res.data);
    });
  }, []);

  return (
    <ScrollView>
      <Header>
        <Text>Lista de filmes</Text>
      </Header>
      <FlatList
        data={filmes}
        keyExtractor={(filmes) => filmes.id}
        renderItem={({ item: filmes }) => (
          <Container>
            <Conteudos>
              <ImagemFilmes
                source={{
                  uri: filmes.imagem,
                }}
              ></ImagemFilmes>
              <Textos>
                <Text>Nome:{filmes.nome}</Text>
              </Textos>
            </Conteudos>
          </Container>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
