import React from 'react';
import Radium from 'radium';

const MenuItem = ({label, url, component}) => (
  <li>{label}</li>
);

export default Radium(MenuItem);