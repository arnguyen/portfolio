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
              .start();
            typewriter.typeString("I'm Andrew. ")
              .pauseFor(1000)
              .start()
            typewriter.typeString("What's your name?")
              .pauseFor(1000)
              .start()
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