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
            <p>
              C
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              C++
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              Python
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              JavaScript
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              HTML
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              CSS
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              Sass
              <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              React Js
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              Flux
              <ReactStars
                count={5}
                value={2}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              Redux
              <ReactStars
                count={5}
                value={1}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </p>
          </div> 
        )
    }
}

export default Skills;