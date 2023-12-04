"use client";
import React, { useEffect, useMemo } from "react";
import { ToastMessageProps } from "../../types/types";
import { styled } from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage: React.FC<ToastMessageProps> = ({ title, info, type }) => {
  const typeParams = useMemo(() => {
    switch (type) {
      case "success":
        return {
          icon: "/toast/success.svg",
          background: colors.green100,
        };
      case "error":
        return {
          icon: "/toast/alert.svg",
          background: colors.red100,
        };
      case "warn":
        return {
          icon: "/toast/warning.svg",
          background: colors.yellow,
        };
      default:
        return {
          icon: "/toast/warning.svg",
          background: colors.gold,
        };
    }
  }, [type]);

  return (
    <Wrapper>
      <Icon src={typeParams.icon} />
      <TextCol>
        <Text size="21px" color={typeParams.background} fontStyle={fonts.f600}>
          {title}
        </Text>
        {info && (
          <Text size="16px" color={colors.grayMain} fontStyle={fonts.f500}>
            {info}
          </Text>
        )}
      </TextCol>
    </Wrapper>
  );
};

export { ToastMessage };

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const TextCol = styled.div`
  display: flex;
  flex-direction: column;
`;
