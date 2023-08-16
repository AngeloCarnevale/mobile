import { styled } from "styled-components/native";

export const LoginContainer = styled.View`
    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    position: absolute;
    /* transform: translate(-50%, -50%); */
`

export const InputContainer = styled.View`
    padding: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 17em;
    
    input {
        background-color: #fff;
        border-radius: 7px;
        padding: 5px;
        width: 100%;
    }
    input::placeholder {
        color: #c0c0c0;
    }
`

export const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
`