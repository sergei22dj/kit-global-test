"use client";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { PostItem } from "@/types/types";
import { Text } from "@/ui/Text/Text";
import { FC, useState } from "react";
import {
  Back,
  CommentsContainer,
  FlexContainer,
  Picture,
  TagsContainer,
  TextContainer,
  Wrapper,
} from "./PostDetailsStyles";

import Link from "next/link";
import Author from "./components/Author";
import Comment from "./components/Comment";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { showToast } from "@/helpers/alertService";
import ModalInput from "./components/ModalInput";
import Head from "next/head";
import { UseMetaData } from "@/helpers/hooks/useMetaData";

const PostDetails: FC<PostItem> = ({
  author,
  avatar,
  category,
  date,
  id,
  img,
  text,
  title,
  comments,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const { isAuthenticated } = useAuth0();

  const onPress = () => {
    if (isAuthenticated) {
      setOpenModal(true);
    } else {
      showToast({
        info: "First you need to login",
        title: "Unauthorized",
        type: "error",
      });
    }
  };
  return (
    <>
      <Wrapper>
        <Link href={"/"}>
          <Back src="/back_arrow-yellow.svg" />
        </Link>

        <Text
          color={colors.white}
          size="32px"
          fontStyle={fonts.f500}
          textAlign="center"
        >
          {title}
        </Text>
        <TagsContainer>
          {category.map((el, index) => (
            <Text
              key={index}
              color={colors.gold}
              size="24px"
              fontStyle={fonts.f400}
            >
              #{el}
            </Text>
          ))}
        </TagsContainer>

        <Picture src={img} />

        <TextContainer>
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </TextContainer>
        <Author author={author} avatar={avatar} date={date} />
        <FlexContainer>
          <Text color={colors.white} size="34px" fontStyle={fonts.f600}>
            COMMENTS:
          </Text>
          <Button variant="outlined" color="info" onClick={onPress}>
            Create comment
          </Button>
        </FlexContainer>
        <CommentsContainer>
          {comments.map((el, index) => (
            <Comment key={index} {...el} />
          ))}
        </CommentsContainer>
        {openModal && <ModalInput setModal={setOpenModal} id={id} />}
      </Wrapper>
    </>
  );
};
export default PostDetails;
