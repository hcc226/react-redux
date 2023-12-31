import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drawflow from 'drawflow';
import exportData from './assets/flow.json'

import { add } from './store/modules/countStore'
import { useSelector, useDispatch } from 'react-redux'
import NestedCheck from './components/NestedCheck/'
import { useState } from 'react';
import Swiper from './components/Swiper'
import StarRating from './components/StarRating'
import ProgressBar from './components/ProgressBar'
import ToDoList from './components/ToDoList'
import MyComponent from './pages/demo_use_memo'
import Parent from './pages/demo_use_callback'
import UseCtxDemo from './pages/demo_use_context'
import Counter from './pages/demo_use_reducer'
import ContentTree from './components/ContentTree'
import { useEffect } from 'react'

function App() {
  let [data, setData] = useState([
    {
        text: 'title 1',
        children: [
            {
                text: '1.1',
                checked: true
            },
            {
                text: '1.2',
                checked: true,
                children: [
                    {
                        text: '1.2.1',
                    }
                ]
            },
        ]
    },
    {
        text: 'title 2',
        children: [
            {
                text: '2.1',
            },
            {
                text: '2.2',
            },
        ]
    }
])

  let [contentData, setContentData] = useState([
    {
        id: '1',
        text: 'parent1',
        children: [
            {
                id: '4',
                text: 'chid2',
                children: [{
                    id: '3',
                    text: 'chid4'
                }]
            }
        ]
    },
    {
        id: '2',
        text: 'parent2',
    }
]);


  let setTreeId = (id, contentData) => {
    for (let i = 0; i < contentData.length; i++){
      if (contentData[i].id === id) {
        contentData[i].close = !contentData[i].close;
        return;
      } else {
        contentData[i].children && setTreeId(id, contentData[i].children)
      }
    }
  }


  let handleClose = (id) => {
    setTreeId(id, contentData)
    setContentData([...contentData])
    console.log(contentData, 'cccdsdadas')
  }



  const { count } = useSelector(state => state.counter)

  const dispatch = useDispatch()
  const clickHandler = () => {
    const action = add()
    dispatch(action)
  }


  let imageList = [
    {
      source: 'https://cdn.pixabay.com/photo/2022/10/27/00/11/japanese-maple-7549741_1280.jpg',
    },
    {
      source: 'https://media.istockphoto.com/id/1495554107/photo/green-maple-leaf-at-maple-tree-in-japan-nature-park.jpg?s=1024x1024&w=is&k=20&c=bhfFMBKbaL4R8Pmi1hSP_jKXjiwHaSHQvA5uNS8Y1B0=',
    },
    {
      source: 'https://img.soundofhope.org/2020-10/1601870032118.jpg',
    },
    {
      source: 'http://image.seohost.cn/storage/11003/article/20191114/1573722504675049.jpg',
    }
  ]

  useEffect(() => {
    var id = document.getElementById("drawflow");
    const editor = new Drawflow(id);
    editor.createCurvature();

    editor.line_path = 1;
    
    editor.reroute = true;
    editor.reroute_fix_curvature = true;
    editor.curvature = 0.1;
    editor.reroute_curvature = 0.1;
    console.log(exportData);
    // editor.on('import', function() {
    //   for(..) {
    //     editor.updateConnectionNodes(id) // ex: editor.updateConnectionNodes('node-5') 
    //   }
    // })
    editor.start();
    setTimeout(() => { 
      //editor.import(YOUR DATA); 
      editor.import({ "drawflow": { "Home": { "data": { "1": { "id": 1, "name": "job1", "data": {}, "class": "", "html": "<div>job1</div>", "typenode": false, "inputs": {}, "outputs": { "output_1": { "connections": [ { "node": "2", "output": "input_1" } ] } }, "pos_x": 65.42498779296875, "pos_y": 175.28749084472656 }, "2": { "id": 2, "name": "job2", "data": {}, "class": "", "html": "<div>job2</div>", "typenode": false, "inputs": { "input_1": { "connections": [ { "node": "1", "input": "output_1" } ] } }, "outputs": {}, "pos_x": 464.42498779296875, "pos_y": 135.28749084472656 } } } } })
    }, 1000);
    // var html = document.createElement("div");
    // html.innerHTML =  "Hello Drawflow!!";
    // editor.registerNode('test', html);
    // // Use
    // editor.addNode('github', 0, 1, 150, 300, 'github', data, 'test', true);
    
  }, []);

  return (
    <>
      <div>
        <NestedCheck data={data}></NestedCheck>
        <Swiper imageList={imageList}></Swiper>
        <StarRating initialRate={3.5} totalRate={5}></StarRating>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ProgressBar completed={80} maxCompleted={200}></ProgressBar>
      <div id="drawflow" style={{height: '1000px'}}></div>
      <ToDoList></ToDoList>
      <MyComponent></MyComponent>
      <Parent></Parent>
      <UseCtxDemo></UseCtxDemo>
      <Counter></Counter>

      <ContentTree data={contentData} onExpand={handleClose}></ContentTree>

      <div className="card">
        <button onClick={clickHandler}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
