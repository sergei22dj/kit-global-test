"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import { styled } from "styled-components";
import Toolbar from "./Toolbar";

type Props = {
  onChange: any;
};

const Editor: FC<Props> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <>
      <Toolbar editor={editor} />
      <Wrapper>
        <EditorContent
          editor={editor}
          style={{
            border: "2px solid gold",
            overflow: "scroll",
            padding: "0 10px",
            minHeight: "100px",
          }}
        />
      </Wrapper>
    </>
  );
};
export default Editor;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: scroll;
  max-height: 250px;
`;
