import styled from "styled-components";

export const ContainerAbout = styled.div`
    padding: 100px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    img{
        max-width: 250px;
        border-radius: 20px;
    }
    p{
        max-width: 700px;
        color: #eae2cf;
        font-size: 14px;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        img{
            max-width: 200px;
        }
        p{
           max-width: 800px;
        }
    }
    @media (max-width: 800px){
        img{
            max-width: 150px;
        }
        p{
            font-size: 12px;
        }
    }
    @media (max-width: 600px){
        img{
            max-width: 100px;
        }
    }
    @media (max-width: 400px){
         p{
            font-size: 10px;
        }
    }
`
