import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px 100px;
    gap: 30px;
    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 56px;
        color: #26979f;
    }
    span{
        font-family: 'Raleway', sans-serif;
        color: #eae2cf;
    }
    div{
        img{
            margin: 10px 0;
        }
    }
    > img{
        max-width: 700px;
        width: 50%;
    }
    @media (max-width: 902px){
        flex-direction: column;
        justify-content: space-evenly;
        padding: 120px 60px 0;
        h1{
            text-align: center;
        }
        > img{ 
            width: 100%;
            max-width: 500px;
        }
    }
    @media (max-width: 800px){
        padding: 120px 40px 0;
        h1{
            font-size: 48px;
            color: #26979f;
        }
    }
    @media (max-width: 600px){
        padding: 120px 20px 0;
        h1{
            font-size: 40px;
            color: #26979f;
        }
    }
    @media (max-width: 360px){
        h1{
            font-size: 30px;
            margin-bottom: 20px;
        }
        div{
            img{
                display: none;
            }
        }
    }
`
export const BoxSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    svg{
        color: #FFF;
        width: 30px;
        height: auto;
    }
    @media (max-width: 902px){
        justify-content: center;
    }
    @media (max-width: 600px){
        svg{
            color: #FFF;
            width: 25px;
            height: auto;
        }
    }
`