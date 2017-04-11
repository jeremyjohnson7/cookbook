import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Recipe from './Recipe';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Recipe recipe={{"_id":"6aebfaf1-3cef-4d60-8375-942e8ca4e44e","title":"Pancakes & Waffles","ingredients":["2 cups flour","2 Tbsp. sugar","1 Tbsp. baking powder","2 tsp. salt","2 eggs","1 1/2 cups milk","1/3 cups oil"],"user":"jjj"}} editHandler={()=>1} />
            </div>
        );
    }
}

export default App;
