import { styled } from "styled-components/native";

export const Container = styled.View`
    display: grid;
    gap: 1.5rem;
    grid-template-rows: 50px 50px;
    padding: 1.5rem;

`

export const ItemContainer = styled.View`
    background-color: #e0e0e0;
    margin: 10px 15px 10px 15px;
    padding: 1.5rem;
    
    p {
        margin-top: 1.5rem;
    }

    img {
        width: 100%;
        height: auto;
        
    }
`