import { styled } from "styled-components/native";


export const Container = styled.View`
    display: flex;
    align-items: center;
    background-color: #e0e0e0;
    justify-content: center;
    gap: 20px ;
    height: 100%;
`

export const InputContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
`

export const Input = styled.TextInput`
    width: 100%;
    background-color: #fff;
    padding: 5px 15px;
    border-radius: 10px;
`

export const ButtonLogin = styled.TouchableOpacity`
    background-color: #fcdd6c;
    padding: 15px 20px;
    border-radius: 10px;
`