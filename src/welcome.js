import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

function Intro(props) {
    const { className } = props;

    return (
      <div id="welcome">
        <h1 className={className}>Hello. I&apos;m Andrew.</h1>
        
      </div>
    )
}

Intro.propTypes = {
    className: PropTypes.string
}

Intro.defaultProps = {
    className: ''
}

export default Intro;