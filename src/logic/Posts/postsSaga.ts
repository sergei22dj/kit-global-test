import { put,takeEvery, takeLatest} from 'redux-saga/effects';
import { addPostFailure, addPostSuccess, getPostsFailure, getPostsSuccess} from './postsSlice'
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { CommentItem, PostItem } from '@/types/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { showToast } from '@/helpers/alertService';

function* getPosts(): Generator<any, void, any> {
  try {
    const postsCollection = collection(db, 'posts');
    const querySnapshot = yield getDocs(postsCollection);
    const formattedPosts:any = [];

    querySnapshot.forEach((doc: any) => {
      formattedPosts.push(doc.data());
    });
    yield put(getPostsSuccess(formattedPosts));
  } catch (error:any) {
    yield put(getPostsFailure(error.message));
  }
}
function* addPost(action: PayloadAction<PostItem>): Generator<any, void, any>  {
  try {
    yield addDoc(collection(db, 'posts'), action.payload);
    const updatedPostsCollection = collection(db, 'posts');
    const updatedQuerySnapshot = yield getDocs(updatedPostsCollection);
    const updatedFormattedPosts:PostItem[] = [];

    updatedQuerySnapshot.forEach((doc: any) => {
      updatedFormattedPosts.push(doc.data());
    });
    yield put(getPostsSuccess(updatedFormattedPosts));
    showToast({
      info: "Your post added",
      title: "Success",
      type: "success",
    });
    
  } catch (error: any) {
    yield put(addPostFailure(error.message));
  }
}
function* addComment(action: PayloadAction<{ postId: string; comment: CommentItem }>): Generator<any, void, any> {
  try {
    const { postId, comment } = action.payload;

    const ref = collection(db, 'posts');
    const q = query(ref, where('id', '==', postId));
    const querySnapshot = yield getDocs(q);

    querySnapshot.forEach(async (postDoc: { id: string; data: () => any; }) => {
      const postRef = doc(db, 'posts', postDoc.id);
      const postData = postDoc.data();

      const comments = postData.comments || [];
      const updatedComments = [...comments, comment];
      await updateDoc(postRef, { comments: updatedComments });
      

      showToast({info:'Success',title:'Comment added',type:'success'})
    });
    const updatedPostsCollection = collection(db, 'posts');
    const updatedQuerySnapshot = yield getDocs(updatedPostsCollection);
    const updatedFormattedPosts:PostItem[] = [];

    updatedQuerySnapshot.forEach((doc: any) => {
      updatedFormattedPosts.push(doc.data());
    });
    yield put(getPostsSuccess(updatedFormattedPosts));
  } catch (error:any) {
    console.error('Error adding comment: ', error);
    yield put(addPostFailure(error.message));
  }
}



function* postsSaga() {
  yield takeLatest('posts/getPosts',getPosts)
  yield takeLatest('posts/addPost', addPost);
  yield takeLatest('posts/addComment', addComment)
}

export default postsSaga