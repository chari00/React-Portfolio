import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Homepage/Home';
import About from './components/pages/About';
// import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

export default function App() {

    return (
    <Router>
       <div>
       <NavTabs />
         <Routes basename='React-Portfolio'>
           <Route path={"/React-Portfolio/"} element={<Home />} />
           <Route path={"/React-Portfolio/about"} element={<About />} />
           <Route path={"/React-Portfolio/blog"} element={<Contact />} />
         </Routes>
       </div>
    </Router>
  );
 


}



