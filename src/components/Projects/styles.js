import styled, { css } from "styled-components";

export const ContainerProjects = styled.div`
    padding: 100px 20px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;    
`
export const BoxButton = styled.div`
    button{
        padding: 10px 20px;
        border-radius: 8px;
        background: #26979F;
        color: #fff;
        font-weight: 600;
    }
    ${({isOpen}) => isOpen ? css`
        button{
            :first-child{
                display: none;
            }
        }
    `: css`
        button{
                :last-child{
                    display: none;
                }
            }
    `} 
`
export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-self: center;
    gap: 20px;
    margin: 40px 0;
    >div{
        :nth-child(1n + 4){
            height: 0;
            overflow: hidden;
            opacity: 0;
            transform: scaleX(0);
            transition: 0.6s;
        }
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 350px) {
        grid-template-columns: 1fr;
    }
    ${({isOpen}) => isOpen && css`
    >div{
        :nth-child(1n + 4){
            height: 100%;
            opacity: 1;
            transform: none;
            overflow: visible;
        }
    }
    `} 
`