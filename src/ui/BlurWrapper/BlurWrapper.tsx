import styled from "styled-components";
import { templates } from "@/theme/templates";
import { FC } from "react";
import { colors } from "@/theme/colors";

type Props = {
  children: React.ReactNode;
  setModal: any;
};

const BlurWrapper: FC<Props> = ({ children, setModal }) => {
  return <Wrapper onClick={() => setModal(false)}>{children}</Wrapper>;
};
export default BlurWrapper;

const Wrapper = styled.div`
  position: fixed;
  ${templates.centerContent};
  width: stretch;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${colors.blurBg};
  z-index: 8;
`;
