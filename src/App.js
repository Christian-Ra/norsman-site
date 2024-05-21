import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import MenuBar from "./Components/menu/MenuBar";
import HomePage from "./Components/home/HomePage";
import ProjectPage from "./Components/portfolio/ProjectPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/project' element={<ProjectPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
