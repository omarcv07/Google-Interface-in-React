import React from 'react';
import PropTypes from 'prop-types';

const backDrop = ( { showBackDrop, closeSomething } ) => {
    return (
        showBackDrop ? <div className={'shop-backdrop'} onClick={closeSomething}></div> : null
    )
};

backDrop.propTypes = {
    showBackDrop : PropTypes.bool.isRequired,
    closeSomething : PropTypes.func,
};

export default backDrop;