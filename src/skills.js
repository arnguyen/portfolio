import React from 'react';
import ReactStars from "react-rating-stars-component";

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div id="skills">
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
            />
          </div> 
        )
    }
}

export default Skills;