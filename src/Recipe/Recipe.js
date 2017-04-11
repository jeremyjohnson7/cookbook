import React from 'react';
// import './Recipe.css';

//⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞
const format = val => (val !== undefined ? val : '')
    .replace('`', '°')
    .replace('1/2', '½')
    .replace('1/4', '¼').replace('3/4', '¾')
    .replace('1/3', '⅓').replace('2/3', '⅔')
    .replace('1/5', '⅕').replace('2/5', '⅖').replace('3/5', '⅗').replace('4/5', '⅘')
    .replace('1/6', '⅙').replace('5/6', '⅚')
    .replace('1/8', '⅛').replace('3/8', '⅜').replace('5/8', '⅝').replace('7/8', '⅞')
    .replace(/(\d+) ([½¼¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/, '$1$2');

export default ({recipe, editHandler}) => (
    <div className="recipe">
        <h1>{recipe.title}</h1>
        <section className="ingredients">
            <ul>
                {recipe.ingredients.map(ingredient => <li>{format(ingredient)}</li>)}
            </ul>
        </section>
        <section className="directions">
            {/*{recipe.directions.map(paragraph => <p>{paragraph}</p>)}*/}
            <p>{format(recipe.directions)}</p>
        </section>
        <button onClick={editHandler}>Edit</button>
    </div>
);
