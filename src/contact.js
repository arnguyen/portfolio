import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={}
    }

    render() {
        return (
          <div id="contact">
            <li>
              <a href="mailto:ngandrew@umich.edu">ngandrew@umich.edu</a>
              <a href="tel:248-904-3173">248-904-3173</a>
              <a href="https://www.linkedin.com/in/andrew-nguyen-084279179/">Linkedin</a>
              <a href="https://github.com/arnguyen">Github</a>
            </li>
          </div>
        )
    }
}

export default Contact;