import React from 'react';

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div>
            <iframe src="Nguyen-Andrew-Resume.pdf" title="resume" />
            <p>
              Also feel free to download my resume 
              <a href="Nguyen-Andrew-Resume.pdf">
                here
              </a>
              .    
            </p>
          </div> 
        )
    }
}

export default Resume;