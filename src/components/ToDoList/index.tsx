import React from "react";
import { STATUS, ToDoItemType } from "./type";
import ToDoItem from "./ToDoItem";

type State = {
    toDoList: ToDoItemType[];
    currentTodo: string;
}

export default class ToDoList extends React.Component<State> {
    state: State = {
        toDoList: [],
        currentTodo: ''
    }

    handleAdd = () => {
        const {currentTodo, toDoList} = this.state;
        if (!currentTodo) {
            return;
        }

        if (toDoList.find(item  => item.text === currentTodo)) return ;

        toDoList.unshift({text: currentTodo, status: STATUS.TODO})
        this.setState({toDoList, currentTodo: ''})
    }

    handleCompelet = (index: number): void => {
        const {toDoList} = this.state;
        toDoList[index].status = STATUS.DONE;
        this.setState({toDoList})
    }

    handleDelete = (index: number): void =>  {
        const {toDoList} = this.state;
        toDoList.splice(index, 1)
        this.setState({
            toDoList
        })
    }

    render(): React.ReactNode {
        const {currentTodo, toDoList} = this.state;
        return (
            <div>
                <h1>This is a todo list</h1>
                <div>
                    <input value={currentTodo} placeholder="please input your todo item" onChange={(e) => {this.setState({currentTodo: e.target.value})}}></input>
                    <button type="submit" onClick={this.handleAdd}>add</button>
                </div>
                <div>
                    {toDoList.map((item, index) => (
                        <ToDoItem text={item.text} status={item.status} index={index} onComplete={this.handleCompelet} onDelete={this.handleDelete}></ToDoItem>
                    ))}
                </div>
            </div>
        )
    }
}