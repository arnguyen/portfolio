import React from 'react';
import './about.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
      const { visitor } = this.props;

      return (
        <div id="about">
          <img id="my-pic" src="mainpic.jpg" alt='My pic' />
          <p>
            Hello, 
            {visitor}
            ! It&apos;s great to meet you. I&apos;m Andrew, a junior studying computer science at the University of Michigan. 
            My passion for computer science and programming actually started when I took my very first programming course, and 
            fell in love with it! Through my time in school, I have taken a wide variety of interesting CS courses, including 
            those learning about different data structures and algorithms, and one where I got to work with python and Spotify API 
            data to create unique data visualizations. Funny enough however, my favorite class I&apos;ve taken had nothing to do 
            with CS, and was about classic civilizations!
          </p>
          <p>
            Outside of my classes, I&apos;ve been involved in numerous student organizations on campus, including a few of my favorites,
            the Alternate Reality Initiative, where I got to work extensively with UX and virtual reality, the Michigan Business Club,
            where I was able to expand my interests in learning about different aspects of business, and of course, the time I got to 
            work as a research assistant studying behavioral game theory! 
          </p>
          <p>
            Through my experiences at school, I&apos;ve gained a deep interests in more theoretical fields of technology such as 
            machine learning and artifical intelligence. I&apos;ve also developed strong interests in virtual reality as well 
            as front-end web development, where I get to work on desiging strong user experiences. 
          </p>
          <p>
            When I&apos;m not working, I like to spend time with healthy practices like running and working out, as well as reading 
            and meditating. Of course, I have quite a strong sweet tooth, and enjoy baking as well. On the more creative side,
            I&apos;ve recently taken up drawing! 
          </p>
          <p>
            Feel free to ask me about any of my interests, technical or otherwise! 
          </p>
          <p>
            -Andrew
          </p>
        </div> 
      );
    }
}

export default About;