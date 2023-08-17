import { styled } from "styled-components/native";

export const LoginContainer = styled.View`
    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 30px;
    border: 1px solid #c0c0c0;
    border-radius: 10px;
`

export const Container = styled.View`
    display: flex;
    height: 100%;
    align-items: center;
    justify-items: center;
    justify-content: center;
`

export const InputContainer = styled.View`
    padding: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 17em;
`

export const Input = styled.TextInput`
    background-color: #fff;
    border-radius: 7px;
    padding: 5px;
    width: 100%;
`

export const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
`