import { FC } from "react";
import {
  Container,
  ContainerTitle,
  Picture,
  Wrapper,
} from "./PostPreviewStyles";
import { PostItem } from "@/types/types";
import { Avatar } from "@mui/material";

import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import Link from "next/link";
import { Text } from "@/ui/Text/Text";

const PostPreview: FC<PostItem> = ({
  author,
  avatar,
  category,
  date,
  img,
  id,
  title,
}) => {
  return (
    <>
      <Wrapper>
        <Link href={`/postDetails/${id}`}>
          <Picture src={img && img} />
        </Link>
        <ContainerTitle>
          {category.map((el, index) => (
            <Text
              key={index}
              color={colors.gold}
              fontStyle={fonts.f600}
              size="20px"
              textTransform="uppercase"
              maxWidth="auto"
              hoverColor={colors.goldLight}
            >
              #{el}
            </Text>
          ))}
        </ContainerTitle>
        <Text
          color={colors.gold}
          fontStyle={fonts.f600}
          size="20px"
          margin="0 auto 10px 0 "
        >
          {title}
        </Text>

        <Container>
          <Avatar src={avatar} />
          <Text
            color={colors.gold}
            size="24px"
            fontStyle={fonts.f500}
            margin="0 auto 0 10px"
          >
            {author}
          </Text>

          <Text color={colors.gold} fontStyle={fonts.f400} size="20px">
            {date}
          </Text>
        </Container>
      </Wrapper>
    </>
  );
};
export default PostPreview;
