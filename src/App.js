import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import api from './api.js';

// import Recipe from './Recipe';
import Header from './Header';
// import Footer from './Footer';

// const pancakes = {
//     "_id": "6aebfaf1-3cef-4d60-8375-942e8ca4e44e",
//     "title": "Pancakes & Waffles",
//     "ingredients": [
//         "2 cups flour",
//         "2 Tbsp. sugar",
//         "1 Tbsp. baking powder",
//         "2 tsp. salt",
//         "2 eggs",
//         "1 1/2 cups milk",
//         "1/3 cups oil"
//     ]
// }

class App extends Component {
    // componentDidMount() {
    //     fetch(`${api}/recipes/f5642476-f2c3-4fff-9a94-bd98c82da675?${token}`)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch();
    // }

    render() {
        return (
            <div className="App">
                {/*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>*/}
                
                {/*<Header logo={logo} company="Company">*/}
                <Header company="Cookbook">
                    {/*<a href="/">Index</a>*/}
                    <a href="/breakfast">Breakfast</a>
                    <a href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                    <a href="/dessert">Dessert</a>
                    <a href="/other">Other</a>
                </Header>

                <div className="container">
                    {this.props.children}
                </div>

                {/*<Recipe guid="6aebfaf1-3cef-4d60-8375-942e8ca4e44e" editHandler={()=>1} />*/}
                {/*<Recipe guid="f5642476-f2c3-4fff-9a94-bd98c82da675" editHandler={()=>1} />*/}
                {/*<Footer>Copyright © 2017 Jeremy J. Johnson. All rights reserved.</Footer>*/}
            </div>
        );
    }
}

export default App;
