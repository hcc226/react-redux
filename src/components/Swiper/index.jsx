import React from "react";
import './index.css'
//

const debounce = (func, ms) => {
    let timer;
    return (...args) =>  {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, ms)
    }
}

const WIDTH = 200;
export default class Swiper extends React.Component {
    state = {
        currentLeft: 0,
        imageList: this.props.imageList
    }

    handleClick = (direction) => {
        let count = 0;
        let {currentLeft, imageList} = this.state;
        const leftBorader = -WIDTH * (this.state.imageList.length - 1)
        
        console.log(currentLeft, 'cur')
        if (currentLeft <= leftBorader && direction === 'left') {
            imageList = [imageList[imageList.length - 1], ...imageList.slice(0, -1)]
            console.log(imageList,'ddd')
            currentLeft = 0;
            this.setState({
                imageList,
                currentLeft: 0
            })
            // return
        }
        if (currentLeft >= 0 && direction === 'right') {
            imageList = [...imageList.slice(1), imageList[0]]
            console.log(imageList,'ddd')
            currentLeft = leftBorader;
            this.setState({
                imageList,
                currentLeft: leftBorader
            })
            // return
        }
        let interval = setInterval(() => {
            count = count + 20;
            if (direction === 'right') {
                this.setState({
                    currentLeft: currentLeft + count
                })
            } else {
                this.setState({
                    currentLeft: currentLeft - count
                }, () => {
                    // if (this.state.currentLeft === leftBorader) {
                    //     const {imageList} = this.state;
                    //     imageList = [imageList[imageList.length - 1], ...imageList.slice(0, -1)]
                    //     this.setState({
                    //         imageList,
                    //         currentLeft: 0
                    //     })
                    // }
                })
            }
            if (count === 200) {
                clearInterval(interval)
            }
        }, 20)
    }

    render() {
        const {currentLeft, imageList} = this.state
        
        const width = WIDTH * (imageList.length)
        return (
            <div className="container">
                <div className="left-container"> <span onClick={debounce(() => this.handleClick('left'), 200)} style={{color: 'white'}}>left</span> </div>
                <div className="right-container"> <span onClick={debounce(() => this.handleClick('right'), 200)} style={{color: 'white'}}>right</span> </div>
                <div className="image-container" style={{width, left: `${currentLeft}px`}} >
                    {imageList?.map(item => (
                        <img className="image" src={item.source}></img>
                    ))}
                </div>
            </div>
        )
    }
}