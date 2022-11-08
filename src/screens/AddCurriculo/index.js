import React, { useEffect, useState, useRef } from 'react';
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Feather } from '@expo/vector-icons'
import {
  Container,
  Header,
  Title,
  IconCamera,
  Content,
  InternalContent,
  Description,
  Steps,
  ButtonPhoto,
  ContainerLabelInput,
  Divider,
  Input,
  InputArea,
  LabelInput,
  ButtonSave,
  TextButtonSave
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType, FlashMode } from 'expo-camera'
import { Dimensions, Image } from 'react-native';
export default function AddCurriculo() {
  const navigation = useNavigation()
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [dataCurriculo, setDataCurriculo] = useState({
    id: uuid.v4(),
    photoUri: null,
    nomeCompleto: '',
    email: '',
    contato: '',
    cargo: '',

    formacaoAcademica: '',
    nomeIntituicao: '',
    anoFormacao: '',

    esperienciaOcupacao: '',
    esperienciaNomeEpresa: '',
    esperienciaAnoInicial: '',
    esperienciaAnoFinal: '',
    esperienciaMesInicial: '',
    esperienciaMesFinal: '',
    detalhesOcupacao: '',
    observacao: '',
  })
  const cameraRef = useRef(null)

  async function handleTakePhoto() {
    const photo = await cameraRef.current.takePictureAsync()
    setDataCurriculo({ ...dataCurriculo, photoUri: photo.uri })
  }

  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then(response => setHasCameraPermission(response.granted))

  }, [])

  async function handleSaveCurriculo() {
    const arrayCurriculos = await AsyncStorage.getItem("@gc_data_curriculo")
    let filteredCurriculos = arrayCurriculos ? JSON.parse(arrayCurriculos) : []

    filteredCurriculos.push(dataCurriculo)
    await AsyncStorage.setItem("@gc_data_curriculo", JSON.stringify(filteredCurriculos))

    Alert.alert("Sucesso", "Curriculo criado com sucesso!")
    navigation.navigate("Home")
  }


  return (
    <Container>
      <Header>
        <Feather
          onPress={() => navigation.goBack()}
          name="arrow-left"
          color="#fff"
          size={30} />

        <Title>Novo Curriculo</Title>

      </Header>
      <Content>
        <InternalContent>

          <Steps>
            <Description>Hora da Self</Description>
          </Steps>
          <Divider />

          {
            hasCameraPermission
              && !dataCurriculo.photoUri
              ? <>
                <Camera
                  style={{
                    width: Dimensions.get('screen').width - 80,
                    height: Dimensions.get('screen').height - 500
                  }}
                  type={CameraType.front}
                  ref={cameraRef}
                  flashMode={FlashMode.on}
                />
                <ButtonPhoto onPress={handleTakePhoto}>
                  <Feather name="camera" size={30} color="#fff" />
                </ButtonPhoto>
              </>
              : dataCurriculo.photoUri
                ?
                <>
                  <Image
                    source={{ uri: dataCurriculo.photoUri }}
                    style={{
                      width: Dimensions.get('screen').width - 80,
                      height: Dimensions.get('screen').height - 500
                    }}

                  />
                  <ButtonPhoto
                    onPress={() => setDataCurriculo({ ...dataCurriculo, photoUri: null })}
                    style={{
                      backgroundColor: 'red'
                    }}>
                    <Feather name="trash-2" size={30} color="#fff" />
                  </ButtonPhoto>
                </>
                :
                <IconCamera>
                  <Feather name="camera-off" size={80} color="black" />
                </IconCamera>

          }

          <Steps>
            <Description>Informações Pessoais</Description>
          </Steps>
          <Divider />
          <ContainerLabelInput>
            <LabelInput>Nome Completo:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite seu nome completo"
            value={dataCurriculo.nomeCompleto}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, nomeCompleto: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Email:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite seu melhor Email"
            value={dataCurriculo.email}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, email: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Contato:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite seu contato"
            value={dataCurriculo.contato}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, contato: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Cargo:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o cargo que você busca"
            value={dataCurriculo.cargo}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, cargo: text })}
          />

          <Steps>
            <Description>Informações Acadêmicas</Description>
          </Steps>
          <Divider />
          <ContainerLabelInput>
            <LabelInput>Nome da Instituição:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o nome da instituição"
            value={dataCurriculo.nomeIntituicao}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, nomeIntituicao: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Formação Acadêmica:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite sua formação acadêmica"
            value={dataCurriculo.formacaoAcademica}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, formacaoAcademica: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Ano Formação:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o ano da formação"
            value={dataCurriculo.anoFormacao}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, anoFormacao: text })}
          />

          <Steps>
            <Description>experiência profissional</Description>
          </Steps>
          <Divider />

          <ContainerLabelInput>
            <LabelInput>Empresa / Instituição:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o nome da empresa / intituição"
            value={dataCurriculo.esperienciaNomeEpresa}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaNomeEpresa: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Cargo:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o cargo que você ocupava"
            value={dataCurriculo.esperienciaOcupacao}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaOcupacao: text })}
          />

          <ContainerLabelInput>
            <LabelInput>O que você fazia?:</LabelInput>
          </ContainerLabelInput>
          <InputArea
            value={dataCurriculo.detalhesOcupacao}
            multiline={true}
            numberOfLines={10}
            style={{ height: 200, textAlignVertical: 'top', }}
            onChangeText={(value) => setDataCurriculo({ ...dataCurriculo, detalhesOcupacao: value })}
          />

          <ContainerLabelInput>
            <LabelInput>Ano de Entrada:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o ano que voce começou"
            value={dataCurriculo.esperienciaAnoInicial}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaAnoInicial: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Mês de Entrada:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o mês que voce começou"
            value={dataCurriculo.esperienciaMesInicial}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaMesInicial: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Ano de Saída:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o ano de saída"
            value={dataCurriculo.esperienciaAnoFinal}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaAnoFinal: text })}
          />

          <ContainerLabelInput>
            <LabelInput>Mês de Saída:</LabelInput>
          </ContainerLabelInput>
          <Input
            placeholder="Digite o mês de saída"
            value={dataCurriculo.esperienciaMesFinal}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, esperienciaMesFinal: text })}
          />

          <Steps>
            <Description>Objetivos</Description>
          </Steps>
          <Divider />

          <ContainerLabelInput>
            <LabelInput>Fale um Pouco sobre seus Objetivos na Nossa Empresa:</LabelInput>
          </ContainerLabelInput>
          <InputArea
            multiline={true}
            numberOfLines={10}
            style={{
              height: 200,
              textAlignVertical: 'top',
            }}
            value={dataCurriculo.observacao}
            onChangeText={(text) => setDataCurriculo({ ...dataCurriculo, observacao: text })}
          />
          <ButtonSave
            onPress={() => handleSaveCurriculo()}
          >
            <TextButtonSave>
              Salvar
            </TextButtonSave>
          </ButtonSave>
        </InternalContent>

      </Content>
    </Container>
  );
}