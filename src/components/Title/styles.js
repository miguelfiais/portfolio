import styled from "styled-components";

export const H2 = styled.h2`
    font-family: 'Raleway',sans-serif;
    color: #26979f;
    letter-spacing: 4px;
    padding-bottom: 5px;
    border-bottom: 1px solid #26979f;
    font-size: 18px;
    margin-top: 10px;
    @media (max-width: 1200px){
        font-size: 16px;
    }
    @media (max-width: 800px){
        font-size: 14px;
    }
    @media (max-width: 300px){
        font-size: 12px;
    }
`