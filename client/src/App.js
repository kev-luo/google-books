import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Search from './pages/Search';
import Saved from './pages/Saved';
import SingleBook from './pages/SingleBook';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import { BookProvider } from './utils/BookContext';

export default function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <BookProvider>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/book/:id" component={SingleBook} />
        </Switch>
      </BookProvider>
    </Router>
  )
}