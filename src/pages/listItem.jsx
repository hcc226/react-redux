import React from "react";

export default class ListItem extends React.Component {
    componentDidMount() {
        console.log(this.props.data)
    }
    render() {
        const {text} = this.props.data;
        return (
            <div style={{height: '200px'}}>{text}</div>
        )
    }
}
