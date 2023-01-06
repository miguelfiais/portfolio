import styled from "styled-components";

export const BoxItem = styled.div`
    background: rgb(32,32,32);
    background: linear-gradient(0deg,rgb(32,32,32) 0%,rgb(16,16,16) 100%);
    padding: 20px;
    width: 150px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: 0.6s;
        border: 1px solid #b4ccb9;
    }
    p{
        text-align: center;
        color: #b4ccb9;
        margin-bottom: 10px;
    }
    svg{
        width: 100%;
        height: auto;
        color: #26979F;
    }
    @media (max-width: 1300px){
        width: 120px;
        padding: 10px;
        p{
            font-size: 14px;
        }
    }
    @media (max-width: 800px){
        width: 100px;
        p{
            font-size: 12px;
        }
    }
    @media (max-width: 400px){
        width: 90px;
        padding: 5px;
        p{
            font-size: 10px;
        }
    }
    
`