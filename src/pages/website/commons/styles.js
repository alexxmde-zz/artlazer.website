const base = {
    fontFamily: 'Architects Daughte',
    margin: 0,
    padding: 0
}


export const mediaQueries = {
    small: '@media only screen and (min-width:480px)',
    medium: '@media only screen and (min-width: 768px)',
    large: '@media only screen and (min-width:992px)',
    extraLarge: '@media only screen and (min-width:1200px)'
};

const visibleSmall = {
    [mediaQueries.small] : {
        display: 'none'
    }   
};

const styles = {
    base,
    visibleSmall
};

export default styles;