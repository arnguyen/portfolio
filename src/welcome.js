import React from 'react';
import Typewriter from 'typewriter-effect';
import './welcome.css';

function Intro() {
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
            typewriter.typeString("It's nice to meet you.")
              .pauseFor(1000)
              .start()
          }}
        />
      </div>
    )
}

export default Intro;