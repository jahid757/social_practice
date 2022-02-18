import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import NotFound from "./components/NotFound";
import PhotoHome from './components/photo/PhotoHome';
import VideoHome from './components/video/VideoHome';
import BlogHome from './components/blog/BlogHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photo" element={<PhotoHome/>}/>
        <Route path="/video" element ={<VideoHome/>} />
        <Route path="/blog" element={<BlogHome/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
