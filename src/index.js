import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// import Home from './modules/Home';
import Recipe from './Recipe';
import Home from './Home';
// import Home from './modules/Home';
// import About from './modules/About';
// import Repos from './modules/Repos';
// import Test from './modules/Test';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/recipes/:guid" component={Recipe} />
            {/*<Route path="/about" component={About} />*/}
            {/*<Route path="/test" component={Test} />*/}
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('root')
);
