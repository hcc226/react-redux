import React from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import ListItem from "./listItem";

export default class InfiniteScrollDemo extends React.Component {
    state = {
        itemData: [
            {
                index: 1,
                text: 'title1'
            },
            {
                index: 2,
                text: 'title1'
            },
            {
                index: 3,
                text: 'title1'
            },
            {
                index: 4,
                text: 'title1'
            },
            {
                index: 5,
                text: 'title1'
            },
            {
                index: 1,
                text: 'title1'
            },
            {
                index: 6,
                text: 'title1'
            },
            {
                index: 7,
                text: 'title1'
            },

        ]
    }

    handleLoadMore = () => {
        console.log('2222', 'loadmore')
        const {itemData} = this.state;
        this.setState({
            itemData: itemData.concat(itemData)
        })
    }

    render () {
        const {itemData} = this.state
        return (
            <InfiniteScroll onLoadMore={this.handleLoadMore}>
                {itemData.map(item => (
                    <ListItem data={item}></ListItem>
                ))}
            </InfiniteScroll>
        )
    }
}