import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Recipe from './Recipe';

const pancakes = {
    "_id": "6aebfaf1-3cef-4d60-8375-942e8ca4e44e",
    "title": "Pancakes & Waffles",
    "ingredients": [
        "2 cups flour",
        "2 Tbsp. sugar",
        "1 Tbsp. baking powder",
        "2 tsp. salt",
        "2 eggs",
        "1 1/2 cups milk",
        "1/3 cups oil"
    ],
    "user": "jjj"
}

class App extends Component {
    componentDidMount() {
        fetch('http://localhost:3080/api/recipes/f5642476-f2c3-4fff-9a94-bd98c82da675?75816cb1a27029855a6c112658832c67c2b79efcd5238b8f53a3d96cbcb64b55')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch();
    }

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
                <Recipe recipe={pancakes} editHandler={()=>1} />
            </div>
        );
    }
}

export default App;
