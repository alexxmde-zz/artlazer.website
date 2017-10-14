import React from 'react';
import Radium from 'radium';

const styles = {
    menuItemList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    ul: {
        padding:0,
        margin:0
    }
}
const MenuItemList = ({ children }) => (
    <div style={styles.menuItemList}>
        <ul style={styles.ul}>
            {children}
        </ul>
    </div>
);

export default Radium(MenuItemList);