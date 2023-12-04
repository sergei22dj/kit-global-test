import { templates } from "@/theme/templates";
import { styled } from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: -webkit-fill-available;


`;
export const Picture = styled.img`
width: 100%;
height: 100%;
aspect-ratio: 16/12;
border-radius: 16px;
transition: 0.3s;
cursor: pointer;

&:hover{
    transform: scale(0.98);
   
}
`;
export const Container = styled.div`
${templates.centerContent};
justify-content: space-between;
width: 100%;

`;
export const ContainerTitle = styled.div`
display: flex;
align-items: flex-start;
column-gap: 10px;
flex-wrap: wrap;
margin-right: auto;
margin: 10px auto 10px 0;
`;