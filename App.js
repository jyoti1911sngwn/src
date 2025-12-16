// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const currentItem = 3
//   const [page, setpage] = useState(1)
//   const arr = ["1abc", "2abc", "3abc","4abc", "5abc", "6abc","7abc", "8abc", "9abc","10abc", "11abc", "12abc"]
//   const newarr = arr.slice( ((page * currentItem)-3), page * currentItem)
//   console.log(page )

//   return (
//     <div className="App">
//      {newarr.map((val,idx)=>(
//       <div>{val}</div>
//      ))}
//      <button onClick={()=>setpage(page-1)}>Prev</button>
//      <button onClick={()=>setpage(page+1)}>Next</button>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react'

const App = () => {
  const[result, setresult] = useState([])
  const [page,setPage] =useState(1)
  const currentPage = 10 ;
  const func = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json()
    setresult(res)
  }
  const currentRes = result.slice((page*currentPage- currentPage), page*currentPage)
  useEffect(()=>{
    func()
  },[])
  return (
    <div>
      {currentRes.map((val,idx)=>(
        <div>{val.title}</div>
      ))}
      <button onClick={()=> setPage(page-1)}>Prev</button>
      <button onClick={()=> setPage(page+1)}>next</button>

    </div>
  )
}

export default App

