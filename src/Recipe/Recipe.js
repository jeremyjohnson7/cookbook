export default ({recipe, editHandler}) => (
    <div className="recipe">
        <h1>{recipe.title}</h1>
        <section className="ingredients">
            <ul>
                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
        </section>
        <section className="directions">
            {recipe.directions.map(paragraph => <p>{paragraph}</p>)}
        </section>
        <button onClick={editHandler}>Edit</button>
    </div>
);
