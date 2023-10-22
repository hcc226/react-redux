import React from "react";
// how to usee 
// hasMore: boolean
// loader: ReactNode
// threshold: Number
// pageStart? 
// <InfiniteScroll onLoadMore={} hasMore={true/false}>
//     {data.map.item(item => {
//           <Child></Child>
//})}
// </InfiniteScroll>
//

const debounce = (func, ts) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, ts)
    }
}

export default class InfiniteScroll extends React.Component {
    ref = React.createRef();
    lastScrollTop = 0;
    componentDidMount() {
        document.addEventListener('scroll', debounce(this.handleScroll, 200))
    }

    handleScroll = (e) => {
        console.log('1111', e)
        if (document.documentElement.scrollTop <= this.lastScrollTop) {
            this.lastScrollTop = document.documentElement.scrollTop;
            return;
        }
        // console.log(this.ref.offsetHeight,  window.innerHeight, document.documentElement.scrollTop)
        this.lastScrollTop = document.documentElement.scrollTop;
        if (this.ref.offsetHeight <= (document.documentElement.scrollTop + window.innerHeight)) {
            this.props.onLoadMore && this.props.onLoadMore()
        }
    }

    render () {
        console.log(this.props.children)
        return (
            <div ref={ref => {this.ref = ref}}>
                {this.props.children}
            </div>
        )
    }
}