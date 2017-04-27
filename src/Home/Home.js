import React, { Component } from 'react';
import api from '../api.js';
import utils from '../utils.js';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [-1]
        }
    }

    componentDidMount() {
        console.log('Component mounted');
        // fetch(`${api.location}/recipes/${this.props.params.category || ''}?${localStorage.apiToken}`)
        fetch(`${api.location}/recipes/${this.props.params.category || ''}?${api.token}`)
            .then(data => data.ok ? data.json() : Promise.reject())
            .then(data => {console.log(data); return data;})
            .then(data => this.setState({data}))
            .catch(data => this.setState({data: [-2]}));
        console.log(this.state.data);
    }

    recipeList() {
        if (this.props.params.category) {
            if (this.state.data.length) {
                return (
                    <ul>
                        {this.state.data.map((recipe, index) => <li key={index}><a href={`/recipes/${recipe._id}`}>{recipe.title}</a></li>)}
                    </ul>
                );
            } else if (this.state.data[0] && this.state.data[0] === -1) {
                return '';
            } else {
                return (
                    <ul>
                        <li>No recipes found. Try <a href={'/'}>another category</a>.</li>
                    </ul>
                );
            }
        } else {
            return (
                <ul>
                    <li><a href={`/breakfast`}>Breakfast</a></li>
                    <li><a href={`/lunch`}>Lunch</a></li>
                    <li><a href={`/dinner`}>Dinner</a></li>
                    <li><a href={`/dessert`}>Dessert</a></li>
                    <li><a href={`/other`}>Other</a></li>
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

export default Home;
