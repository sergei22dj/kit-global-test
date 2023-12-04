"use client";
import BlurWrapper from "@/ui/BlurWrapper/BlurWrapper";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { CloseButton, Wrapper } from "./ModalFormStyles";
import { Text } from "@/ui/Text/Text";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { Btn } from "@/ui/Button/Btn";
import Input from "@/ui/Input/Input";
import Editor from "./Editor/Editor";
import { useAuth0 } from "@auth0/auth0-react";
import { PostItem, ZodValidationError } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@/logic/Posts/postsSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireStorage } from "@/firebase/firebase";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate } from "@/helpers/formatStrings";
import { postsSelector } from "@/logic/Posts/postSelectors";
import { showToast } from "@/helpers/alertService";
import { useForm } from "./useForm";

type Props = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const ModalForm: FC<Props> = ({ setVisible }) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { loading } = useSelector(postsSelector);
  const [disabledUi, setDisabledUi] = useState(false);

  const {
    PostItemSchema,
    deleteTag,
    handleEnterKey,
    handleNewTagValueChange,
    image,
    setImage,
    newTagValue,
    setText,
    setTitle,
    tags,
    text,
    title,
  } = useForm();

  const createPost = async () => {
    if (!image) {
      showToast({
        info: "You need to choose an image",
        title: "Error",
        type: "error",
      });
      return;
    }
    const imageRef = ref(fireStorage, `kitGlobal/images/${image?.name}`);
    const snapshot = await uploadBytes(imageRef, image!);
    const downloadURL = await getDownloadURL(snapshot.ref);

    const newPost: PostItem = {
      id: uuidv4(),
      img: downloadURL,
      author: user?.name as string,
      category: tags,
      date: getCurrentDate(),
      avatar: user?.picture as string,
      title: title,
      text: text,
      comments: [],
    };
    try {
      const validatedPost = PostItemSchema.parse(newPost);
      setDisabledUi(true);
      validatedPost && dispatch(addPost(newPost));
      setVisible(false);
      setDisabledUi(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const allErrors = error.errors.map((err): ZodValidationError => {
          return {
            message: err.message,
            path: err.path,
          };
        });

        allErrors.map((el) => {
          showToast({
            info: el.message,
            title: `Error ${el.path}`,
            type: "error",
          });
          return null;
        });
      }
    }
  };

  return (
    <BlurWrapper setModal={() => setVisible(false)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setVisible(false)}>
          <img src="/Close_Button.svg" alt="asd" />
        </CloseButton>
        <Text color={colors.gold} size="40px" fontStyle={fonts.f600}>
          Create new post
        </Text>
        <Input title={"Title"} type={"text"} handler={setTitle} value={title} />
        <Input
          title={"Categories"}
          type={"tags"}
          handler={handleNewTagValueChange}
          value={newTagValue}
          tags={tags}
          handleEnterKey={handleEnterKey}
          deleteTag={deleteTag}
        />
        <Input
          title={"Image"}
          type={"filepicker"}
          selectedImage={image}
          setSelectedImage={setImage}
        />
        <Editor onChange={setText} />
        <Btn
          label={"Create"}
          width={"100%"}
          height={"46px"}
          func={createPost}
          spinner={loading}
          buttonActive={!disabledUi}
        />
      </Wrapper>
    </BlurWrapper>
  );
};
export default ModalForm;
