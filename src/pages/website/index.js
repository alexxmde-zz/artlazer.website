import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Moveis from './moveis';
import Menu from './menu';
import Radium from 'radium';

const styles = {
    base: {
        fontFamily: 'Architects Daughter'
    }
}
const Website = ({ match }) => (
    <div style={styles.base}>
        <Menu />
        <Switch>
            <Route path="/moveis" component={Moveis} />
        </Switch>
    </div>
);

export default Radium(Website);