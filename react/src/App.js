import './App.css';
import Test from './Test';
import Btn from './Btn';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    alert('Effect: test');
  }, [count]);
  
  function abc() {
    alert('test');
  }

  function getLike(){
    setCount(count+1);
  }

  function dislike(){
    setCount(count-1);
  }

  return (
    <div>
      <Test name='alamin'/>
      <Btn name='abc' events={abc} />
      <button onClick={getLike}>Like</button>
      <h1>{count}</h1>
      <button onClick={dislike}>dislike</button>
    </div>
  );
}

export default App;
