import { colors } from "@/theme/colors";
import { templates } from "@/theme/templates";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ buttonActive?: boolean; width: string; height: string }>`
  ${(p) => {
    return css`
    ${templates.centerContent};
    width: ${p.width};
    height: ${p.height};
    color: ${p.buttonActive ? "black" : colors.grayMain};
    margin-top: 40px;
    background-color: ${p.buttonActive
      ? colors.gold
      : colors.grayLight};
    border-radius: 16px;
    font-weight: 600;
    font-family: Gilroy-Semibold;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.3px;
    user-select: none;
    cursor: pointer;
    &:hover{
      
    }
    @media (max-width: 900px) {
      height: 56px;
      margin-top: 32px;
      font-size: 16px;
    }
  `;
  }}
`;
