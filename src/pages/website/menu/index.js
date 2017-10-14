import React from 'react';
import Radium from 'radium';
import BrandLabel from '../commons/images/brandLabel';
import Hamburger from '../commons/images/hamburger';
import { mediaQueries } from '../commons/styles.js';
import base from '../commons/styles.js';
import MenuItem from './menuItem.js';
import MenuItemList from './menuItemList.js';
import Cart from '../commons/images/cart.js';

console.log(MenuItem);
const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        width:'100%'
    },
    brandLabel: {
        marginLeft:'10%',
        width: '60%',
        marginRight:'15%'
    },
    hamburger: {
      marginTop:'5px',
      width: '10%'
    }
}
const Menu = () => (
    <nav>
        <header style={styles.header}>
            <BrandLabel style={ styles.brandLabel } />
            <Hamburger style={[styles.hamburger, base.visibleSmall]} />
        </header>
        <MenuItemList>
            <MenuItem url='/moveis' label='Moveis' />
            <MenuItem url='/ambientes' label='Ambientes' />
            <MenuItem url='/onde-estamos' label='Onde Estamos?' />
            <MenuItem url='/contato' label='Contato' />
            <MenuItem url='/carrinho' component={Cart} />
        </MenuItemList>
    </nav>
);

export default Radium(Menu);
