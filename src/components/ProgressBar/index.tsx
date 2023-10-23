import React from "react";

type ProgressBarProps =  {
    completed: number;
    maxCompleted?: number;
    custromLabel?: string;
    bgColor?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    baseBgColor?: string;
    labelColor?: string;
    direction?: string; // left to right, bottom to up
}

// 另外一个版本考虑的是页面的加载进度
export default class ProgressBar extends React.Component<ProgressBarProps> {
    render () {
        const {
            completed,
            maxCompleted = 100,
            custromLabel = '',
            bgColor = '#6a1b9a',
            baseBgColor = '#e0e0de',
            height = '20px',
            width = '100%',
            borderRadius= '10px',
            labelColor = '#fff',
        } = this.props;
        return (
            <div>
                <div style={{height, width, borderRadius, backgroundColor: baseBgColor}}>
                  <div style={{width: `${completed * 100 / maxCompleted}%`, height, backgroundColor: bgColor, borderRadius}}>
                    <span style={{color: labelColor}}>{custromLabel || `${completed * 100 / maxCompleted}%` }</span>
                  </div>
                </div>
                {/* <span>{maxCompleted}</span> */}
            </div>
            
        )
    }
}
