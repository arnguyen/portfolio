import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

function Intro(props) {
    const { className } = props;

    return (
      <div>
        <h1 className={className}>Hello. I&apos;m Andrew.</h1>
        <img src="mainpic.jpg" alt='My pic' />
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