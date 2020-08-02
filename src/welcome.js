import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import './welcome.css';

function Intro(props) {
    const { className } = props;

    return (
      <div id="welcome">
        <Typewriter
          options={{
            strings: "Hello. I'm Andrew.",
            autoStart: true,
            loop: false
          }}
        />
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