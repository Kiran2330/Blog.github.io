import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTopRoute from './Components/ScrollToTopRoute';

//App components
import Home from './Components/home';
import NotFound from './Components/notFound';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
              <ScrollToTopRoute exact path="/" component={Home} />
              <ScrollToTopRoute component={NotFound} />
            </Switch>        
        </div>    
    </BrowserRouter>
    );
  }
}

export default App;
