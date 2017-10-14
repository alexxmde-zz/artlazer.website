import React from 'react';
import Radium from 'radium';
import HamburgerImg from './hamburger.png';

const styles = {
    hamburgerImg: {
        width: '100%'
    }
}
const Hamburger = ({ style }) => (
    <div style={style}>
        <img src={HamburgerImg} style={styles.hamburgerImg} />
    </div>
);

export default Radium(Hamburger);
