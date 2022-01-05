import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Post from './pages/Post'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/posts" element={<Post /> } />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
