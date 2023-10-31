import { createSlice } from "@reduxjs/toolkit";

const comment = createSlice({
    name: 'comment',
    initialState: {
        commentList: [
            {
                id: '1',
                content: 'tttttttt',
                level: 1,
                author: {
                    avatar: '',
                    nickname: 'name1',
                    userId: '33',
                    ip: '美国'
                },
                likeCount: 1222,
                likeState: 1,
                replyID: '',
                replyCount: 12,
                publishTime: '4-27',
            },
            {
                id: '2',
                content: 'tttttttt',
                level: 1,
                author: {
                    avatar: '',
                    nickname: 'name1',
                    userId: '33',
                    ip: '北京'
                },
                likeCount: 1222,
                likeState: 1,
                replyID: '1',
                publishTime: '4-28',
            },
            {
                id: '3',
                content: 'tttttttt',
                level: 1,
                author: {
                    avatar: '',
                    nickname: 'name1',
                    userId: '33',
                    ip: '北京'
                },
                likeCount: 1222,
                likeState: 1,
                replyID: '1',
                publishTime: '4-29',
            },
        ]
    },
    reducers: {
        insert(state, action) {
            // TODO
            state.commentList = [
                ...action.payload,
                ...state.commentList
            ]
        },
        deleteItem(state, action) {
            // TODO
        },
        update(state, action) {
            // TODO
        }
    }
})

export const {insert, deleteItem, update} = comment.actions;
export default comment.reducer;