import { colors } from "@/theme/colors";
import { templates } from "@/theme/templates";
import styled from "styled-components";


export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 10px;
`;
export const InputField = styled.input`
all: unset;
border: 1px solid ${colors.gold};
border-radius: 6px;
width: 100%;
height: 40px;
padding: 0 10px;
box-sizing: border-box;
`;
export const TagsWrapper = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
`;
export const TagItem = styled.div`
display: flex;
background-color: ${colors.goldLight};
padding: 6px;
border-radius: 10px;
column-gap: 5px;
`;
export const Cross = styled.img`
cursor: pointer;
width: 20px;
height: 20px;
`;
export const ImageContainer = styled.div`
${templates.centerContent};
flex-direction: column;
`;
export const ChoosenPic = styled.img`
height: 20%;
width: 20%;
aspect-ratio: 16/12;
margin: 0 auto;
`;