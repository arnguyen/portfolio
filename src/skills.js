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
            <div className="software-skills">
              <h2>Software Skills</h2>
              <p className="col-1">
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
              </p>
              <p className="col-2">
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
          </div> 
        )
    }
}

export default Skills;