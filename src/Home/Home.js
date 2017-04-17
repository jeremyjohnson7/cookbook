import React, { Component } from 'react';
import api from '../api.js';
import utils from '../utils.js';
import './Home.css';

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

    recipeList() {
        if (this.props.params.category) {
            return (
                <ul>
                    {this.state.data.map(recipe => <li><a href={`/recipes/${recipe._id}`}>{recipe.title}</a></li>)}
                </ul>
            );
        } else {
            return (
                <ul>
                    <li><a href={`/breakfast`}>Breakfast</a></li>
                    <li><a href={`/lunch`}>Lunch</a></li>
                    <li><a href={`/dinner`}>Dinner</a></li>
                    <li><a href={`/dessert`}>Dessert</a></li>
                </ul>
            );
        }
    }

    render() {
        console.log(this.props.guid);
        return (
            <div className="recipe-list">
                <h1>{utils.capitalize(this.props.params.category || 'Index')}</h1>
                <section className="recipe-list">
                    {this.recipeList()}
                </section>
            </div>
        );
    }
}

export default Link;
