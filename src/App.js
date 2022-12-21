import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Test from './Components/Test';
import States from "./Components/Context/States"

function App() {
  return (
    <States>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
    </States>
  )
}

export default App