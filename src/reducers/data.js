import { List, fromJS, Map } from 'immutable';

export default (state = fromJS({
    entities: {
        listUsers: {},
        listPieces: {},
        listAmbiences: {},
    }
}), action) => {
    switch(action.type) {
        default: 
            return state;
    }
};