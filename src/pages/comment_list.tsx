import React, { useState } from "react";
import store from "../store";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/Comment";
import './comment_list.css'
import { insert } from "../store/modules/commentStore"; 
import { useDispatch } from "react-redux";
export default function CommentList () {
    const [currentComment, setCurrentComment] = useState('');
    const dispatch = useDispatch()

    const fetchData = () => {
        // TODO:
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setCurrentComment(e.target.value)
    }

    const handleSubmit = () => {
        const c = [
            {
                ...items[0],
                content: currentComment
            }
        ]

        dispatch(insert(c))
        
        setCurrentComment('');
    }

    const items = store.getState().comment.commentList;
    
    return (
        <div style={{width: '100%'}}>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                className='list-container'
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map(item => (
                    <Comment commentData={item}></Comment>
                ))}
            </InfiniteScroll>
            <div>
                <input value={currentComment} onChange={handleChange}></input>
                <button onClick={handleSubmit}>提交</button>
            </div>
        </div>
        
    )
}