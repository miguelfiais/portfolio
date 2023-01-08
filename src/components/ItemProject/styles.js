import styled, { css } from "styled-components";

export const Item = styled.div`
    position: relative;
    >img{
        opacity: 0.3;
    }
    img{
        width: 100%;
        max-width: 400px;   
    }
    .details{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        h2{
            text-align: center;
            color: #fff;
            padding: 0 10px;
        }
    }
    .skills{
        svg{
            color: #26979F;
            width: 40px;
            height: auto;
        }
    }
    .data{
        background-color: #3b3b3b;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0px 0px 12px 12px;
        padding: 0 10px;
        position: absolute;
        top: 99%;
        width: 100%;
        height: 0;
        overflow: hidden;
        z-index: 5;
        p{
            color: #fff;
            font-size: 14px;
        }
        button{
            padding: 5px 15px;
            background: #26979F;
            border-radius: 18px;
            color: #fff;
            font-size: 12px;
        }
    }
    &:hover{
        img{
            opacity: 1;
            transition: ease-in-out .4s;
        }
        .details{
            display: none;
        }
        .data{
            height: 40px;
            transition: .4s;
        }
    }
    @media (max-width: 1200px){
        .details{
            h2{
                font-size: 20px;
            }
        }
        .skills{
            svg{
                width: 30px;
            }
        }
        .data{
            p{
                font-size: 12px;
            }
            button{
                padding: 5px 10px;
            }
        }
    }
    @media (max-width: 600px){
        .details{
            h2{
                font-size: 16px;
            }
        }
        .skills{
            svg{
                width: 25px;
            }
        }
        .data{
            p{
                font-size: 10px;
            }
            button{
                padding: 5px;
                font-size: 8px;
            }
        }
    }
    @media (max-width: 450px){
        .details{
            gap: 5px;
            h2{
                font-size: 12px;
            }
        }
        .skills{
            svg{
                width: 18px;
            }
        }
        .data{
            p{
                font-size: 10px;
            }
            button{
                padding: 5px;
                font-size: 8px;
            }
        }
    }
    @media (max-width: 350px){
        .details{
            gap: 10px;
            h2{
                font-size: 16px;
            }
        }
        .skills{
            svg{
                width: 25px;
            }
        }
        .data{
            p{
                font-size: 10px;
            }
            button{
                padding: 5px 8px;
                font-size: 10px;
            }
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: hidden;
    justify-content: content;
    align-items: center;
    backdrop-filter: blur(3px);
    background: rgb(32,32,32);
    background: linear-gradient(0deg,rgba(32,32,32,0.90) 0%,rgba(16,16,16,0.90) 100%);
    z-index: 999;
    display: flex;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s;
    transform: rotate(-45deg);
    .conteudo-modal{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        background-color: #3b3b3b;
        padding: 20px;
        display: grid;
        grid-template-columns: 35% 60%;
        gap: 20px;
        border-radius: 12px;
        position: relative;
        >button{
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: transparent;
            svg{
                width: 30px;
                height: auto;
                color: #E84D58;
            }
        }
        img{
            border-radius: 12px;
        }
        h2{
            color: #26979F;
        }
        p{
            color: #fff;
            margin: 20px 0;
            font-size: 14px;
        }
        .links{
            display: flex;
            gap: 20px;
            a{
                padding: 10px 20px;
                background-color: #26979F;
                color: #fff;
                border-radius: 8px;
                font-size: 14px;
                text-decoration: none;
            }
        }
        @media (max-width: 800px) {
            p{
                font-size: 12px;
                margin: 10px 0;
            }
            .links{
                a{
                    font-size: 12px;
                }
            }
        }
        @media (max-width: 670px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                padding: 15px;
            }
        }
        @media (max-width: 400px) {
            p{
                font-size: 10px;
            }
            .links{
                a{
                    padding: 5px 10px;
                    font-size: 10px;
                }
            }
        }
    }
    ${({isOpen}) => isOpen && css`
        height: 100%;
        overflow: visible;
        opacity: 1;
        transition: opacity ease-in 0.5s;
        transform: rotate(0deg);
    `}
`