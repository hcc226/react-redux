import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { add } from './store/modules/countStore'
import { useSelector, useDispatch } from 'react-redux'
import NestedCheck from './components/NestedCheck/'
import { useState } from 'react';

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
  const { count } = useSelector(state => state.counter)

  const dispatch = useDispatch()
  const clickHandler = () => {
    const action = add()
    dispatch(action)
  }

  return (
    <>
      <div>
        <NestedCheck data={data}></NestedCheck>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
