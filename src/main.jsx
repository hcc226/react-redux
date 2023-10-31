import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'
import { Provider } from 'react-redux'
import InfiniteScrollDemo from './pages/infiniteScrollDemo.jsx'
import CommentList from './pages/comment_list.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <CommentList />
    {/* <InfiniteScrollDemo></InfiniteScrollDemo> */}
  </Provider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <InfiniteScrollDemo></InfiniteScrollDemo>
// )
