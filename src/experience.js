import React from 'react';
import './experience.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div id="experience">
            <div id="amazon">
              <img src="amazon.png" alt="amazon logo" />
              <h2>SDE Intern, Amazon - Summer 2020</h2>
              <p>
                This past summer, I had the wonderful opportunity to intern at Amazon. As an SDE Intern 
                on the photos organization, I worked with the front-end web team, where I worked on 
                implementing a slideshow feature for web. Throughout my time there, I had the pleasure
                of working with extremely talented engineers and UX designers, from whom I learned a lot.
                I developed skills in front-end technologies including React Js, and learned a ton about 
                industry methods, such as the Agile methodology and using tools such as Git and Jira. The 
                most exciting thing about it all? Knowing that I was creating a feature that users would be 
                able to get their hands on!
              </p>
            </div>
            <div id="si-206">
              <img src="spotify.png" alt="spotify logo" />
              <h2>Final Project, SI 206 - Fall 2019</h2>
              <p>
                In the fall of 2019, I took a class that I still consider to be one of my favorites. 
                This class, which focused extensively on gathering and manipulating data with python,
                had a final project where we had to gather data from various APIs and create 
                visualizations of the data. For my project, I used data from the Spotify and Open
                Weather APIs. The goal was to see if there was any sort of correlation between 
                music genres and weather. Although the data was inconclusive, I was able to hone my 
                skills in python and SQL, as well as the python libraries Matplotlib and NumPy.
              </p>
            </div>
            <div id="ari">
              <img src="ari.png" alt="ari logo" />
              <h2>Project Lead, ARI - Winter 2019</h2>
              <p>
                In winter 2019, I joined what I consider to be one of the most interesting student 
                orgs on campus, the Alternate Reality Initiative, or ARI. This org, which focused 
                on educating its members on virtual, augmented, and mixed reality, provided me with 
                the unique opportunity to lead a small team, where we focused on designing the user 
                experience for a concept virtual reality escape room. Not only did I have a ton of fun 
                doing so, I learned a lot about understanding things from the perspective of a user, 
                as well as gaining a better appreciation for virtual reality technologies.
              </p>
            </div>
          </div> 
        )
    }
}

export default Experience;