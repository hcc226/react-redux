import React from "react";

const imageMap = {
    1: './src/components/StarRating/assets/fullstar.awebp',
    0.5: './src/components/StarRating/assets/halfstar.awebp',
    0: './src/components/StarRating/assets/empty.awebp'
}

export default class StarRating extends React.Component {
    state = {
        currentRate: this.props.initialRate,
        totalRate: this.props.totalRate
    }

    getRateList = () => {
        let {currentRate, totalRate} = this.state;
        console.log('star', currentRate, totalRate)
        let arr = new Array(totalRate);

        let halfPos;
        if (Math.floor(currentRate) !== currentRate) {
            // 不是整数
            halfPos = Math.floor(currentRate)
        }

        for (let index= 0; index < totalRate; index++){
            if (index < Math.floor(currentRate)) {
                arr[index] = 1;
            } else if (halfPos && index === halfPos) {
                arr[index] = 0.5;
            } else {
                arr[index] = 0;
            }
        }   
        console.log('aaaaa', arr);
        return arr
    }

    handleRateChange(index) {
        this.setState({currentRate: index + 1})
        this.props.handeRateChange && this.props.handeRateChange();
    }

    

    render() {
        let {currentRate, totalRate} = this.state;
        console.log('llll', this.getRateList())
        if (currentRate > totalRate) {
            return null
        }

        return (

            
            <div>
                {this.getRateList().map((item, index) => {
                    return (
                        <img onClick={() => this.handleRateChange(index)} key={index} style={{width: '20px', height: '20px'}} src={imageMap[item]}></img>
                    )
                })}
            </div>
        )
    }
}