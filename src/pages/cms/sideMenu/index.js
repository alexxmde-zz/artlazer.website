import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    nav: {
        backgroundColor: '#252525',
        display: 'flex',
        flexDirection: 'column'
    }
};


const SideMenu = ({ match }) => (
    <nav style={styles.nav}>
        <Link to={`${match.url}/home`}>Home</Link>
        <Link to={`${match.url}/users`}>Users</Link>
    </nav>  
);

export default SideMenu