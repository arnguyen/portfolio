import React from 'react';
import ReactStars from "react-rating-stars-component";
import './skills.css';

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
                <br />
                C++
                <ReactStars
                  count={5}
                  value={4}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                Python
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                JavaScript
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
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
                <br />
                Sass
                <ReactStars
                  count={5}
                  value={4}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                React Js
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                Flux
                <ReactStars
                  count={5}
                  value={2}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
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
            <div className="software-tools">
              <h2>Software Tools</h2>
              <p className="col-1">
                Git
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                Visual Studio
                <ReactStars
                  count={5}
                  value={2}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                VS Code
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </p>
              <p className="col-2">
                Chrome Developer Tools
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                Atlassian/Jira
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </p>
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <p className="col-1">
                English
                <ReactStars
                  count={5}
                  value={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <br />
                Cantonese
                <ReactStars
                  count={5}
                  value={2}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </p>
              <p className="col-2">
                French
                <ReactStars
                  count={5}
                  value={2}
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