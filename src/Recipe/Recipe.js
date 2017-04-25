import React, { Component } from 'react';
import api from '../api.js';
import './Recipe.css';

const format = val => (val !== undefined ? val : '')
    .replace(/`/g, '°')
    .replace(/1\/2/g, '½')
    .replace(/1\/4/g, '¼').replace(/3\/4/g, '¾')
    .replace(/1\/3/g, '⅓').replace(/2\/3/g, '⅔')
    .replace(/1\/5/g, '⅕').replace(/2\/5/g, '⅖').replace(/3\/5/g, '⅗').replace(/4\/5/g, '⅘')
    .replace(/1\/6/g, '⅙').replace(/5\/6/g, '⅚')
    .replace(/1\/8/g, '⅛').replace(/3\/8/g, '⅜').replace(/5\/8/g, '⅝').replace(/7\/8/g, '⅞')
    .replace(/(\d+) ([½¼¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/g, '$1$2')
    .replace(/(\d+['"]?)x(\d+['"]?)/ig, '$1×$2')
    .replace(/(\d+) deg(rees)?/ig, '$1°')
    .replace(/(\d+)([FC])/g, '$1°$2')
    .replace(/--/g, '—')
    .replace(/\*\*/g, '†')
    .replace(/\*{3}/g, '‡')
    .replace(/(\d+)-(\d+)/ig, '$1–$2');

class Recipe extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            data: {
                title: '',
                ingredients: [],
                directions: ''
            }
        }
    }

    componentDidMount() {
        console.log('Component mounted');
        console.log(api.location, api.token);
        // fetch(`${api.location}/recipes/${this.props.params.guid}?${localStorage.apiToken}`)
        fetch(`${api.location}/recipes/${this.props.params.guid}?${api.token}`)
            .then(data => data.ok ? data.json() : Promise.reject())
            .then(data => {console.log(data); return data;})
            .then(data => this.setState({data}))
            .catch();
        console.log(this.state.data);
    }

    render() {
        console.log(this.props.guid);
        console.log(api.location, api.token);
        return (
            <div className="recipe">
                <h1>{this.state.data.title}</h1>
                <section className="ingredients">
                    <ul>
                        {this.state.data.ingredients.map((ingredient, index) => <li key={index}>{format(ingredient)}</li>)}
                    </ul>
                </section>
                <section className="directions">
                    {/*<p>{format(this.state.data.directions)}</p>*/}
                    {(this.state.data.directions || '').split(/(\r?\n){2,}/).map((paragraph, index) => <p key={index}>{format(paragraph)}</p>)}
                </section>
                {/*<button onClick={this.props.editHandler}>Edit</button>*/}
            </div>
        );
    }
}

export default Recipe;
