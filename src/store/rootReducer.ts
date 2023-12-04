import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../logic/Posts/postsSlice'; // Ваш slice для постов

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;