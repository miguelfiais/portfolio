import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 120px;
    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 56px;
        color: #26979f;
    }
    span{
        font-family: 'Raleway', sans-serif;
        color: #eae2cf;
    }
    h3{
        color: #eae2cf;
        margin: 16px 0;
    }
    > img{
        max-width: 600px;
        width: 50%;
    }
    @media (max-width: 1200px){
        h1{
            font-size: 48px;
        }
        h3{
            font-size: 16px;
        }
    }
    @media (max-width: 1000px){
        flex-direction: column;
        gap: 48px;
        h1, h3{
            text-align: center;
        }
        div{
            justify-content: center;
        }
        > img{ 
            width: 100%;
            max-width: 500px;
        }
    }
    @media (max-width: 600px){
        h1{
            font-size: 36px;
        }
        h3{
            font-size: 14px;
        }
    }
`
export const BoxSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    svg{
        color: #FFF;
        width: 30px;
        height: auto;
    }
    @media (max-width: 600px){
        svg{
            width: 25px;
        }
    }
`