// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MoviesPage from './MoviesPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/movies" component={MoviesPage} />
      </div>
    </Router>
  );
};

export default App;

