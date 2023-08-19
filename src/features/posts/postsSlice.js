import { createSlice } from "@reduxjs/toolkit";
import {sub} from "date-fns";

const initialState = [
    { id: 1, title: 'Lorem Ipsum Dolor set ', description: 'lorem ipsim dolor set amt et und ich ja ' },
    { id: 2, title: 'Lorem Ipsum Dolor set ', description: 'lorem ipsim dolor set amt et und ich ja ' },
    { id: 3, title: 'Lorem Ipsum Dolor set ', description: 'lorem ipsim dolor set amt et und ich ja ' },
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, description, userId) {
                return {
                    payload: {
                        id: Math.random(),
                        title,
                        description,
                        userId : +userId,
                        date : new Date().toISOString(),
                        reactions : {
                            heat : 0,
                            thumb : 0,
                            smile : 0,
                            dislike : 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const allPosts = (state) => { return state.posts }
export const { postAdded, reactionAdded } = postsSlice.actions


export default postsSlice.reducer