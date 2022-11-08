
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const Header = styled.View`
background-color: #004474;
width: 100%;
height: 100px;
justify-content: space-between;
align-items: center;
padding-top: 24px;
flex-direction: row;
padding-left: 24px;
padding-right: 24px;
`;

export const Title = styled.Text`

font-size: 25px;
color: #fff;
font-weight: lighter;
`;

export const Steps = styled.View`
width: 100%;
height: 30px;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin: 24px 0;
`;

export const Description = styled.Text`
font-size: 25px;
color: #004474;
font-weight: lighter;
`;

export const Divider = styled.View`
width: 100%;
height: 1px;
background-color: #004474;
margin-bottom: 24px;

`;

export const Content = styled.ScrollView`
width: 100%;
flex: 1;
`;

export const InternalContent = styled.View`
width: 100%;
flex: 1;
justify-content: center;
align-items: center;
padding: 24px;
`;

export const IconCamera = styled.View`
width: 200px;
height: 200px;
background-color: #dcdcdc;
border-radius: 100px;
justify-content: center;
align-items: center;
`;



export const ButtonPhoto = styled.TouchableOpacity`
width: 80px;
height: 80px;
border-radius: 40px;
background-color: #004474;
justify-content: center;
align-items: center;
margin: 24px;
`;

export const ContainerLabelInput = styled.View`
width: 100%;
justify-content: space-between;
`;
export const LabelInput = styled.Text`
font-size: 18px;
color: gray;
font-weight: bolder;
align-content: flex-start;
`;

export const Input = styled.TextInput`
width: 100%;
background-color: #dcdcdc;
border-radius: 8px;
height: 40px;
padding: 5px 10px;
margin-bottom: 20px;
`;

export const InputArea = styled.TextInput`
width: 100%;
background-color: #dcdcdc;
border-radius: 8px;
height: 150px;
padding: 5px 10px;
margin-bottom: 20px;
`;

export const ButtonSave = styled.TouchableOpacity`
width: 100%;
height: 60px;
border-radius: 8px;
background-color: #004474;
justify-content: center;
align-items: center;
`;

export const TextButtonSave = styled.Text`
font-size: 22px;
color: #FFF;
font-weight: bolder;
align-content: center;
justify-content: center;
`;


