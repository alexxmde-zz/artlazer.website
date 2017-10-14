import { Map, List, fromJS } from 'immutable';

export default (state = fromJS({
    authentication: {}, configuration: {}
}), action) => {
    switch(action.type) {
        default: 
            return state;
    }
};