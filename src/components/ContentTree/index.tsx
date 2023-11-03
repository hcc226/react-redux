import React from "react";

export default function ContentTree (props) {
    console.log(props, 'ppppppp------')
    return (
        <>
            {props.data.map(item => {
                return (
                    <>
                        <div onClick={() => props.onExpand(item.id)}>{item.text}</div>
                        <div style={{marginLeft: '20px'}}> 
                            {item.children && !item.close ? (
                                <ContentTree data={item.children} onExpand={props.onExpand}></ContentTree>
                            ) : null}
                        </div>
                    </>                    
                )
            })}
        </>
    )
}