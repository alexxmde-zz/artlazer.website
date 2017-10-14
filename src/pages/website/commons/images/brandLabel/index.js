import React from 'react';
import Radium from 'radium';
import BrandLabelImg from './brandLabel.png';

const styles = {
    brandLabelImage: {
        width: '100%'
    }
}
const BrandLabel = ({style}) => (
    <div style={style}>
        <img src={BrandLabelImg} style={styles.brandLabelImage} />
    </div>
)

export default Radium(BrandLabel);
