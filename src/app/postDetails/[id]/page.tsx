"use client";
import PostDetails from "@/components/PostDetails/PostDetails";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { getPosts } from "@/logic/Posts/postsSlice";
import { PostItem } from "@/types/types";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  params: {
    id: string;
  };
};

const PostDetailsPage: FC<Props> = ({ params }) => {
  const posts: PostItem[] = useSelector((state: any) => state.posts.posts);
  const dispatch = useDispatch();

  const filtredPost: PostItem | undefined = posts?.find(
    (el) => el.id === params.id
  );
  useEffect(() => {
    dispatch(getPosts());
  }, [params]);
  return (
    <>
      {filtredPost ? (
        <>
          <UseMetaData
            title={filtredPost?.title as string}
            img={filtredPost?.img as string}
            description={"Discover our blog"}
          />

          <PostDetails {...filtredPost} />
        </>
      ) : null}
    </>
  );
};
export default PostDetailsPage;
