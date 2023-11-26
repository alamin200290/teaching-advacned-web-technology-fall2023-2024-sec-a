import './App.css';
import Test from './Test';
import Btn from './Btn';

function App() {
  
  function abc() {
    alert('test');
  }

  return (
    <div>
      <Test name='alamin'/>
      <Btn name='abc' events={abc} />
      <button onClick={()=>{abc()}}>Click</button>
    </div>
  );
}

export default App;
