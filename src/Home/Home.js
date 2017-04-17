import React, { Component } from 'react';
import api from '../api.js';
import utils from '../utils.js';
// import RecipeDisplay from './RecipeDisplay';
// import './Recipe.css';

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log('Component mounted');
        fetch(`${api.location}/recipes/${this.props.params.category || ''}?${api.token}`)
            .then(data => data.ok ? data.json() : Promise.reject())
            .then(data => {console.log(data); return data;})
            .then(data => this.setState({data}))
            .catch();
        console.log(this.state.data);
    }

    render() {
        console.log(this.props.guid);
        return (
            <div className="recipe-list">
                <h1>{utils.capitalize(this.props.params.category || 'Index')}</h1>
                <section className="recipe-list">
                    <ul>
                        {this.state.data.map(recipe => <li><a href={`/recipes/${recipe._id}`}>{recipe.title}</a></li>)}
                    </ul>
                </section>
            </div>
        );
    }
}

export default Link;
