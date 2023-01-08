import styled from "styled-components";

export const BoxHeader = styled.header`
    width: 100vw;
    background-color: rgba(10, 10, 10, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 9;
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 0 60px;
    }
    nav h1{
        color: #26979f;
        font-family: 'Raleway', sans-serif;
        font-size: 36px;
        line-height: 42px;
        letter-spacing: -0.045em;
    }
    nav ul:nth-child(2){
        display: flex;
        gap: 60px;
    }
    a{
        color: #eae2cf;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        gap: 5px;
        svg{
            width: 20px;
            height: auto;
        }
    }
    a:hover{
        color: #26979f;
    }
    .openMenu{
        display: none;
        background: transparent;
        color: #26979f;
        svg{
            width: 40px;
            height: auto;
        }
    }
    .openMenu:hover{
        color: #eae2cf;
    }
    @media (max-width: 1000px ){
        nav{
            padding: 0 20px;
        }
        nav ul:nth-child(2){
            display: none;
        }
        .openMenu{
            display: block;
        }
    }
    @media (max-width: 800px ){
        nav h1{
            font-size: 30px;
            line-height: 36px;
        }
    }
    @media (max-width: 500px ){
        nav h1{
            font-size: 26px;
            line-height: 30px;
        }
    }
`