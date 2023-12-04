import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Text } from "@/ui/Text/Text";
import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  author: string;
  avatar: string;
  date: string;
};

const Author: FC<Props> = ({ author, avatar, date }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Text color={colors.gold} size="21px" fontStyle={fonts.f500}>
        {author}
      </Text>
      <Text color={colors.gold} size="21px" fontStyle={fonts.f400}>
        ( {date} )
      </Text>
    </Wrapper>
  );
};
export default Author;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 100px;
  align-items: center;
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
