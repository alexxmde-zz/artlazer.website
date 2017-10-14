import React from 'react';
import Header from './header';
import SideMenu from './sideMenu';

const Cms = ({ match }) => (
    <div>
        <h1>CMS</h1>
        <Header />
        <SideMenu match={match} />
    </div>
);

export default Cms;