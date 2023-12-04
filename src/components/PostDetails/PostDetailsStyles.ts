import { templates } from '@/theme/templates';
import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
${templates.centerContent};
padding: 24px;
flex-direction: column;
box-sizing: border-box;
position: relative;
`;
export const TextContainer = styled.div`
width: 65%;
margin-top: 24px;
@media(max-width: 650px){
    width: 100%;
  }
`;
export const TagsContainer = styled.div`
display: flex;
column-gap: 10px;
`;
export const Picture = styled.img`
width: 65%;
height: 65%;
margin-top: 24px;
border-radius: 12px;
@media(max-width: 650px){
    width: 100%;
    height: 100%;
  }
`;
export const Back = styled.img`
position: absolute;
width: 40px;
left: 24px;
top: 24px;
cursor: pointer;
`;
export const CommentsContainer = styled.div`
display: flex;
flex-direction: column-reverse;
row-gap: 30px;
width: 65%;
margin-top: 24px;
@media(max-width: 650px){
    width: 100%;
    height: 100%;
  }
`;
export const FlexContainer = styled.div`
display: flex;
margin-top: 10px;
justify-content: space-between;
align-items: center;
width: 65%;
@media(max-width: 650px){
    width: 100%;
    height: 100%;
  }
  @media(max-width: 390px){
   flex-direction: column-reverse;
   row-gap: 10px;
  }
`;