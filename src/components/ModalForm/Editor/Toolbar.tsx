"use client";
import { type Editor } from "@tiptap/react";
import { FC } from "react";
import { styled } from "styled-components";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from "lucide-react";
import { colors } from "@/theme/colors";
import { templates } from "@/theme/templates";

type Props = {
  editor: Editor | null;
};

const Toolbar: FC<Props> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <Wrapper>
        <Toggle
          pressed={editor.isActive("heading")}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 />
        </Toggle>
        <Toggle
          pressed={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </Toggle>
        <Toggle
          pressed={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Toggle>
        <Toggle
          pressed={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Toggle>
        <Toggle
          pressed={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <ListOrdered />
        </Toggle>
      </Wrapper>
    </>
  );
};
export default Toolbar;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #5b5b5b;
  padding: 10px;
  display: flex;
`;
const Toggle = styled.div<{ pressed: boolean }>`
  width: 30px;
  height: 30px;
  ${templates.centerContent};
  background-color: ${(p) => (p.pressed ? colors.gold : colors.grayMain)};
  margin: 0 10px;
  border: 1px solid ${colors.grayMain};
  border-radius: 4px;
  cursor: pointer;
`;
