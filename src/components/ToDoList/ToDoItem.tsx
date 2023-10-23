import React from "react";

import { ToDoItemProps, STATUS } from "./type";

export default class ToDoItem extends React.Component<ToDoItemProps> {

    handleComplete = () => {
        this.props.onComplete && this.props.onComplete(this.props.index)
    }

    handleDelete = () => {
        this.props.onDelete && this.props.onDelete(this.props.index)
    }

    render(): React.ReactNode {
        const {text, status} = this.props;
        return (
            <>
                <div>
                    <span style={{textDecoration: status === STATUS.DONE ? 'line-through' : ''}}>{text}</span>
                    <button onClick={this.handleComplete}>complete</button>
                    <button onClick={this.handleDelete}>delete</button>
                </div>
            </>
            


        )
    }
}