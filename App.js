import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const currentItem = 3
  const [page, setpage] = useState(1)
  const arr = ["1abc", "2abc", "3abc","4abc", "5abc", "6abc","7abc", "8abc", "9abc","10abc", "11abc", "12abc"]
  const newarr = arr.slice( ((page * currentItem)-3), page * currentItem)
  console.log(page )

  return (
    <div className="App">
     {newarr.map((val,idx)=>(
      <div>{val}</div>
     ))}
     <button onClick={()=>setpage(page-1)}>Prev</button>
     <button onClick={()=>setpage(page+1)}>Next</button>
    </div>
  );
}

export default App;
