import React from "react";
import './index.css'

export default function Comment ({commentData}) {
    const {content, author: {avatar, nickname, ip}, publishTime} = commentData
    return (
        <div className="comment-container">
            <div className="item-container">
                <img src={avatar} style={{height: '40px', width: '40px', backgroundColor: 'gray', borderRadius: '20px', marginTop: '5px', marginRight: '5px'}}></img>
                <div className="content-container">
                    <div>
                        <span>{nickname}</span>
                    </div>
                    <div>
                        <span>{content}</span>
                    </div>
                    <div className="last-line">
                        <div>
                            <span>{publishTime}</span>
                            <span>{ip}</span>
                        </div>
                        <div className="action-container">
                            <span>like</span>
                            <span>dislike</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}