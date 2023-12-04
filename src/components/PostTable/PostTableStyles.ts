import styled from "styled-components";

export const Wrapper = styled.div`
padding: 24px;
width: 100%;
display:flex;
flex-direction: column;
justify-content: flex-end;
margin-bottom: 100px;
`;
export const GridWrapper = styled.div`
  display: grid;
  margin: 24px 0;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 24px;
  width: 100%;
  @media (max-width: 656px) {
    grid-template-columns: repeat(1, minmax(320px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(272px, 1fr));
  }
  & > div {
    width: 100%;
    aspect-ratio: 16/12;
    
   
  }
`;