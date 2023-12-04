import { getCurrentDate, getCurrentTime } from "@/helpers/formatStrings";
import { postsSelector } from "@/logic/Posts/postSelectors";
import { addComment } from "@/logic/Posts/postsSlice";
import { colors } from "@/theme/colors";
import { templates } from "@/theme/templates";
import { CommentItem } from "@/types/types";
import BlurWrapper from "@/ui/BlurWrapper/BlurWrapper";
import { Btn } from "@/ui/Button/Btn";
import Input from "@/ui/Input/Input";
import { useAuth0 } from "@auth0/auth0-react";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

type Props = {
  setModal: any;
  id: string;
};

const ModalInput: FC<Props> = ({ setModal, id }) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector(postsSelector);
  const [loadingUi, setLoadingUi] = useState(false);
  const { user } = useAuth0();
  const createComment = () => {
    setLoadingUi(false);
    const newComment: CommentItem = {
      author: user?.name as string,
      avatar: user?.picture as string,
      date: getCurrentDate(),
      id: uuidv4(),
      text: commentText,
      time: getCurrentTime(),
    };
    try {
      dispatch(addComment({ postId: id, comment: newComment }));
      setTimeout(() => {
        setModal(false);
      }, 1000);
      setLoadingUi(true);
    } catch (error) {}
  };
  return (
    <BlurWrapper setModal={setModal}>
      <ContentContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setModal(false)}>
          <img src="/Close_Button.svg" alt="asd" />
        </CloseButton>
        <Input
          title={"Comment text"}
          type={"text"}
          handler={setCommentText}
          value={commentText}
        />
        <Btn
          label={"Create comment"}
          width={"70%"}
          height={"40px"}
          func={createComment}
          spinner={loading || loadingUi}
          buttonActive={commentText.length > 0}
        />
      </ContentContainer>
    </BlurWrapper>
  );
};
export default ModalInput;
const ContentContainer = styled.div`
  background-color: #000000b4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 12px;
  position: relative;
  border: 0.5px solid ${colors.gold};
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  ${templates.centerContent};
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${colors.white};
  cursor: pointer;
`;
