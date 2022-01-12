import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing bootstrap js files
import 'bootstrap/dist/js/bootstrap.bundle';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Post from './pages/Post'
import PostItem from './components/PostItem';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/posts" element={<Post /> } />
          <Route path="/posts/:id" element={<PostItem /> } />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
