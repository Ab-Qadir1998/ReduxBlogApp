import { createSlice } from "@reduxjs/toolkit";

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
                        userId : +userId
                    }
                }
            }
        }
    }
})

export const allPosts = (state) => { return state.posts }
export const { postAdded } = postsSlice.actions


export default postsSlice.reducer