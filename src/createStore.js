import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

export default function (theHistory, reducers, initialState) {
    const middleware = [];

    middleware.push(routerMiddleware(theHistory));

    middleware.push(thunkMiddleware);

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            collapsed: true,
            stateTransformer: (state) => state
        }));
    }

    const newCreateStore = Reflect.apply(applyMiddleware, null, middleware)(createStore);
    return newCreateStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}