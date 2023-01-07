import styled from "styled-components";

export const ContainerContato = styled.div`
    min-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    background: rgb(32,32,32);
    background: linear-gradient(0deg,rgb(32,32,32) 0%,rgb(16,16,16) 100%);
    color: #FFF;
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }
    a{
        color: #eae2cf;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        svg{
            color: #26979F;
            width: 50px;
            height: auto;
        }
        &:hover{
            transform: scale(1.1);
            transition: 0.6s;
        }
    }
    @media (max-width: 500px){
        div{
            gap: 20px;
        }
        a{
            font-size: 14px;
            svg{
                color: #26979F;
                width: 40px;
                height: auto;
            }
        }
    }
`