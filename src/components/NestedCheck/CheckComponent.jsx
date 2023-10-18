
import React from 'react';


export default class CheckComponent extends React.Component {
    handleChange = (e, text) => {
        console.log('eeeee', e)
        this.props.onStatusChange(e.target.checked, text)
    }
    
    render() {
        const data = this.props.data;

        console.log('dddd',data)
        return (
            <div>
                {data.map((item, index) => {
                    return (
                        <div key={item.text}>
                            <div>
                                <input
                                    ref={input => {
                                        if (input) {
                                            input.indeterminate = item.indeterminate ? true : false
                                        }
                                    }} 
                                    type="checkbox"
                                    onChange={(e) => this.handleChange(e, item.text)}
                                    checked={item.checked}>
                                </input>
                                <label>{item.text}</label>
                            </div>
                            {item.children ? (
                                <div style={{marginLeft: '20px'}}>
                                    <CheckComponent data={item.children} onStatusChange={this.props.onStatusChange}></CheckComponent>
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        )
    }
}