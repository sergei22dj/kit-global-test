import { colors } from "@/theme/colors";
import { Text } from "../Text/Text";
import {
  ChoosenPic,
  Cross,
  ImageContainer,
  InputField,
  TagItem,
  TagsWrapper,
  Wrapper,
} from "./InputStyles";
import { fonts } from "@/theme/fonts";
import { FC } from "react";
import { Btn } from "../Button/Btn";

type Props = {
  title: string;
  type: "text" | "filepicker" | "tags" | "richtext";
  handler?: any;
  value?: any;
  deleteTag?: any;
  tags?: string[];
  handleEnterKey?: any;
  selectedImage?: any;
  setSelectedImage?: any;
};

const Input: FC<Props> = ({
  title,
  type,
  handler,
  value,
  tags,
  deleteTag,
  handleEnterKey,
  selectedImage,
  setSelectedImage,
}) => {
  const handleImageUpload = async () => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.addEventListener("change", async (event) => {
        const inputElement = event.target as HTMLInputElement;
        const selectedFile = inputElement.files?.[0];

        if (selectedFile) {
          setSelectedImage(selectedFile);
        }
      });

      fileInput.click();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper>
      {type !== "filepicker" && (
        <Text
          color={colors.white}
          size="24px"
          fontStyle={fonts.f500}
          margin="10px 0 0 0"
        >
          {title}:
        </Text>
      )}

      {type === "text" && (
        <InputField value={value} onChange={(e) => handler(e.target.value)} />
      )}
      {type === "tags" && (
        <>
          <InputField
            value={value}
            onChange={handler}
            onKeyDown={handleEnterKey && handleEnterKey}
          />
          <TagsWrapper>
            {tags?.map((el, index) => (
              <TagItem key={index}>
                <Text
                  color={colors.grayMain}
                  size="16px"
                  fontStyle={fonts.f500}
                >
                  {el}
                </Text>
                <Cross src="/cross.svg" onClick={() => deleteTag(index)} />
              </TagItem>
            ))}
          </TagsWrapper>
        </>
      )}
      {type === "filepicker" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
          }}
        >
          <Btn
            func={handleImageUpload}
            label={"Choose image"}
            width={"50%"}
            height={"40px"}
          />

          {selectedImage ? (
            <ImageContainer>
              <Text color={colors.gold} size="16px" fontStyle={fonts.f500}>
                {selectedImage?.name}
              </Text>
              <ChoosenPic
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
              />
            </ImageContainer>
          ) : null}
        </div>
      )}
      {type === "richtext" && "asd"}
    </Wrapper>
  );
};
export default Input;
