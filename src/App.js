import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import BlogContainer from './components/Blog/BlogContainer';
import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import NavContainer from './components/Nav/NavContainer';

function App() {
  return (<BrowserRouter>
  <div className="app-wrapper">
    <NavContainer></NavContainer>
    <Redirect to="/blog"/>
    <div className="content">
      <Route path="/search" render={() => <Search />} />
      <Route path="/blog" render={() => <BlogContainer />} />
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
