import React from 'react';
import './resume.css';

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div id="resume">
            <iframe src="Nguyen-Andrew-Resume.pdf" title="resume" />
            <p>
              Also feel free to download my resume&nbsp;
              <a href="Nguyen-Andrew-Resume.pdf" download>
                here
              </a>
              .    
            </p>
          </div> 
        )
    }
}

export default Resume;