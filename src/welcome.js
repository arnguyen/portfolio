import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import Typewriter from 'typewriter-effect';
import './welcome.css';

function Intro(props) {
    const { className } = props;

    return (
      <div id="welcome">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello. ')
              .pauseFor(1000)
              .typewriter.typeString("I'm Andrew.")
              .start();
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