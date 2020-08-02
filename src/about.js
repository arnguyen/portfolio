import React from 'react';
import './about.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div id="about">
            <img id="my-pic" src="mainpic.jpg" alt='My pic' />
            <p>
              Hello! It&apos;s great to meet you. I&apos;m Andrew, a junior studying computer science at the University of Michigan. 
              My passion for computer science and programming actually started when I took my very first programming course, and 
              fell in love with it! Through my time in school, I have taken a wide variety of interesting CS courses, including 
              those learning about different data structures and algorithms, and one where I got to work with python and Spotify API 
              data to create unique data visualizations. 
            </p>
          </div> 
        )
    }
}

export default About;