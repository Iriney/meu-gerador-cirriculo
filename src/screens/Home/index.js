import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Header,
  Title,
  Content,
  Item,
  ItemText,
  ButtonAdd,
  TextButtonAdd
} from './styles'
import { useNavigation } from '@react-navigation/native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing'


export default function Home() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [curriculos, setCurriculos] = useState([])

  useEffect(() => {

    async function dataStorage() {
      setLoading(true)
      const arrayCurriculos = await AsyncStorage.getItem("@gc_data_curriculo")
      let filteredCurriculos = arrayCurriculos ? JSON.parse(arrayCurriculos) : []
      setCurriculos(filteredCurriculos)
      setLoading(false)
    }
    dataStorage()
  }, [])





  async function sharePdf(data) {

    const html = `
    <htnl>
    <body>
    <h1>${data.nomeCompleto}</h1> 
    
    <img src="${data.photoUri}" alt="" width="150" height="150">
    </body>
    </htnl>
    `;

    const file = await printToFileAsync({
      html: html,
      base64: false,

    })

    await shareAsync(file.uri)
  }



  if (loading) {
    return (
      <Container>
        <Content>
          <Title>
            <Feather name="loader" color="#FFF" size={24} />
          </Title>
        </Content>
      </Container>
    )

  }

  return (
    <Container>
      <Header>
        <Title>Meu Gerador de Cirriculo</Title>
      </Header>
      <ButtonAdd
        onPress={() => navigation.navigate('AddCurriculo')}
      >
        <TextButtonAdd>
          Adicionar Novo
        </TextButtonAdd>
        <Feather name="file-plus" size={24} color="#fff" />
      </ButtonAdd>
      <Content>
        {curriculos.map((c, index) => (
          <Item
            key={index}
            onPress={() => sharePdf(c)}
          >
            <ItemText>{`Curriculo N: ${index + 1}`}</ItemText>
          </Item>
        )
        )}


      </Content>
    </Container>
  );
}