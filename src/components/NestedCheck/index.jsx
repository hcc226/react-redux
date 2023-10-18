import React from "react";
import CheckComponent from "./CheckComponent";
export default class NestedCheck extends React.Component {
    state = {
        data: []
    }
    // constructor(props) {
    //     super(props);   
    // }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
        // this.state.data = this.props.data;
    }

    setChildrenState = (node, status) => {
        node.children?.map(item => {
            item.checked = status;
            item.indeterminate = false;
            if (item.children) {
                this.setChildrenState(item, status)
            }
        })
    }

    traverse = (node, text, status) => {
        if(node.text === text) {
          node.checked = status;
          node.indeterminate = false;
          // change children status
          this.setChildrenState(node, status)
          return true;
        } 
    
        if (node.children) {
          node.children.map(item => {
            if (this.traverse(item, text, status)) {
              console.log(node, 'nnnnnn')
              if (node.children.filter(item1 => !item1.checked).length === 0) {
                node.checked = true;
                node.indeterminate = false;
              } else if (node.children.filter(item1 => item1.checked).length === 0) {
                node.checked = false;
                node.indeterminate = false;
              } else {
                // indeterminate 为true
                node.indeterminate = true;
              }
            }
          })
        }
      }
    
      handleStatusChange = (status, text) => {
        const {data} = this.state;
        data.forEach(item => {
          this.traverse(item, text, status)
        })
    
        // 设置完之后重新便利children改变父组件状态
        console.log('ssssdddd', data);
        this.setState({
            data: data.slice(0)
        });
      }

    render(){
        console.log('aaaa', this.state, this.props)
        const {data} = this.state
        return (
            <div>
                <CheckComponent data={data} onStatusChange={this.handleStatusChange}></CheckComponent>
            </div>
        )
    }
}