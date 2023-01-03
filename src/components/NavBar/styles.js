import styled from "styled-components";

export const BoxHeader = styled.header`
    width: 100vw;
    background-color: rgba(10, 10, 10, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
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
    nav ul{
        display: flex;
        gap: 60px;
    }
    a{
        color: #eae2cf;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
    }
    a:hover{
        color: #26979f;
    }
    button{
        padding: 10px 25px;
        background: transparent;
        border: 2px solid #26979f;
        color: #26979f;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
    button:hover{
        background: #26979f;
        color: #eae2cf;
        transform: scale(0.95);
        transition: 0.6s;
    }
    button:active{
        opacity: 0.8;
    }
    @media (max-width: 1000px ){
        nav{
            padding: 0 40px;
        }
        nav ul{
            display: none;
        }
    }
    @media (max-width: 800px ){
        nav{
            padding: 0 20px;
        }
        nav h1{
            font-size: 30px;
            line-height: 36px;
        }
        button{
            padding: 10px 20px;
            font-size: 12px;
            line-height: 14px;
        }
    }
    @media (max-width: 500px ){
        nav h1{
            font-size: 26px;
            line-height: 30px;
        }
        button{
            padding: 10px 15px;
        }
    }
`