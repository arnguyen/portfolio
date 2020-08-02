import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import './welcome.css';

function Intro(props) {
    const { className } = props;

    return (
      <div id="welcome">
        <Typist>
          <p>
            Hello.
            <Typist.Delay ms={500} />
            I&apos;m Andrew.
          </p>
        </Typist>
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