import styled from "styled-components";

export const ContainerAbout = styled.div`
    padding: 100px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    margin-bottom: 16px;
    img{
        max-width: 250px;
        border-radius: 20px;
    }
    p{
        max-width: 500px;
        color: #eae2cf;
        font-size: 16px;
    }
    @media (max-width: 1000px){
        img{
            max-width: 200px;
        }
        p{
            font-size: 14px;
            max-width: 400px;
        }
    }
    @media (max-width: 600px){
        flex-direction: column;
        p{
            font-size: 12px;
        }
    }
    
`
