import { CommentItem, PostItem } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface PostsState {
  posts: PostItem[];
  loading: boolean;
  error: string | null;
}

const initialState:PostsState = {
  posts: [], 
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true
    },
    getPostsSuccess: (state,action) => {
      state.posts = action.payload
      state.loading = false
    },
    getPostsFailure: (state) => {
      state.loading = false
      state.error = 'getPost error'
    },
    addPost: (state,action: PayloadAction<PostItem>) => {
      state.loading = true
      state.posts = [action.payload]
    },
    addPostSuccess: (state) => {
      state.loading = false
    },
    addPostFailure: (state) => {
      state.loading = false
    },
    addComment: (state, action: PayloadAction<{postId: string; comment: CommentItem}>) => {
      const { postId, comment } = action.payload;
      console.log(postId, comment)
    }
  },
});

export const { getPosts,getPostsFailure,getPostsSuccess,addPost,addPostFailure,addPostSuccess,addComment  } = postsSlice.actions;
export default postsSlice.reducer;
