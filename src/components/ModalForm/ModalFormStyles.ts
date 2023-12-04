import { colors } from "@/theme/colors";
import { templates } from "@/theme/templates";
import styled from "styled-components";



export const Wrapper = styled.div`
display: flex;
max-height: 100vh;
flex-direction: column;
background-color: black;
padding: 31px 24px;
align-items: center;
border-radius: 10px;
width: 70%;
overflow: scroll;
  ${templates.centerContent};
  background-color: #000000c4;
  z-index: 5;
  position: relative;
  @media (max-width: 700px) {
width: 100%;
  }
`;
export const CloseButton = styled.div`
  position: absolute;
  ${templates.centerContent};
  top: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${colors.white};
  cursor: pointer;
`;