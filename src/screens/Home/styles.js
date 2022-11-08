import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
background-color: #004474;
width: 100%;
height: 100px;
justify-content: center;
align-items: center;
padding-top: 24px;
`

export const Title = styled.Text`
font-family: monospace;
font-size: 22px;
color: #fff;
font-weight: bold;
`

export const Content = styled.ScrollView`
flex: 1;
width: 100%;
height: 100%;
background-color: #ddd;
padding: 24px;

`;

export const Item = styled.TouchableOpacity`
width: 100%;
height: 50px;
justify-content: center;
align-items: center;
color: #fff;
border: 1px solid #004474;
border-radius: 8px;
margin-bottom: 30px;
background-color: #fff;
`;

export const ItemText = styled.Text`
color: #004474;
font-size: 20px;
font-weight: lighter;
`;

export const ButtonAdd = styled.TouchableOpacity`
flex-direction: row;
width: 90%;
height: 50px;
border-radius: 8px;
background-color: #004474;
justify-content: space-between;
align-items: center;
margin: 24px;
padding: 0 10px;
`;

export const TextButtonAdd = styled.Text`
color : #fff;
font-size: 18px;
font-weight: bold;
`;


