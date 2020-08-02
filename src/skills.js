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
              <p>
                C++, HTML, CSS, Sass
                <ReactStars
                  count={5}
                  value={4}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                C, Python, JavaScript, React Js
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
            <div className="software-tools">
              <h2>Software Tools</h2>
              <p>
                Git, VS Code, Chrome Developer Tools, Atlassian/Jira
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                Visual Studio
                <ReactStars
                  count={5}
                  value={2}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </p>
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <p>
                English
                <ReactStars
                  count={5}
                  value={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                French, Cantonese
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