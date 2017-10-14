import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './createStore.js';
import reducer from './reducers';
import Cms from './pages/cms';
import Website from './pages/website';
import { StyleRoot } from 'radium';

const history = createHistory();
const store = createStore(history, reducer);
const App = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <StyleRoot>
                <div>
                <Switch>
                    <Route path="/cms" component={Cms} />
                    <Route path="/" component={Website} />
                </Switch>
                </div>
            </StyleRoot>
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
