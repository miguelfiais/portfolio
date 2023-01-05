import styled, { css } from "styled-components";

export const MenuMobile = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgb(32,32,32);
    background: linear-gradient(0deg, rgba(32,32,32,0.95) 0%, rgba(16,16,16,0.95) 100%);
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: ease-in-out 0.6s;
    button{
        background: transparent;
        color: #eae2cf;
        svg{
            width: 30px;
            height: auto;
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
    }
    button:hover{
        color: #E84D58;
    }
    @media (max-width: 1000px ){
        display: flex;
    }
    ${({isVisible}) => isVisible && css`
        opacity: 1;
        height: 100%;
        
    `}
`