import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Land from "./component/landing.jsx"


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Land} /> 
      </Router>
    );
  }
}

export default App;