import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { CommentItem } from "@/types/types";
import { Text } from "@/ui/Text/Text";
import { FC } from "react";
import { styled } from "styled-components";

const Comment: FC<CommentItem> = ({ author, avatar, date, id, text, time }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Container>
        <Text
          size="21px"
          color={colors.gold}
          fontStyle={fonts.f500}
          textAlign="left"
        >
          {author}
        </Text>
        <Text size="16px" color={colors.white}>
          {text}
        </Text>
        <Text
          size="16px"
          color={colors.gold}
          fontStyle={fonts.f500}
          margin="auto 0 0 auto"
        >
          {time} {date}
        </Text>
      </Container>
    </Wrapper>
  );
};
export default Comment;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${colors.gold};
  border-radius: 12px;
  padding: 8px 12px 8px 12px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  column-gap: 10px;
  flex-direction: column;
  align-items: start;
  margin-left: 10px;
  @media (max-width: 390px) {
    row-gap: 10px;
  }
`;
const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
