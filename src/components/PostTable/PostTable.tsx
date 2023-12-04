"use client";
import { PostItem } from "@/types/types";
import PostPreview from "./components/PostPreview/PostPreview";
import { GridWrapper, Wrapper } from "./PostTableStyles";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "@/logic/Posts/postsSlice";
import { useEffect, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { postsSelector } from "@/logic/Posts/postSelectors";
import { showToast } from "@/helpers/alertService";
import { ToastContainer, toast } from "react-toastify";
import { ToastMessage } from "@/ui/ToastMessage/ToastMessage";
import { useAuth0 } from "@auth0/auth0-react";

const PostTable = () => {
  const { error, loading, posts } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  const [openModal, setOpenModal] = useState(false);

  const onPress = () => {
    isAuthenticated
      ? setOpenModal(true)
      : showToast({
          info: "First you need to login",
          title: "Error",
          type: "error",
        });
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Wrapper>
        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          onClick={onPress}
        >
          Create new post
        </Button>

        {posts.length ? (
          <GridWrapper>
            {posts?.map((el) => (
              <PostPreview {...el} />
            ))}
          </GridWrapper>
        ) : (
          <div style={{ margin: "0 auto" }}>
            <CircularProgress size={50} />
          </div>
        )}
      </Wrapper>
      {openModal && <ModalForm setVisible={setOpenModal} />}
    </>
  );
};
export default PostTable;
