import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={}
    }

    render() {
        return (
          <div id="contact">
            <a href="mailto:ngandrew@umich.edu">ngandrew@umich.edu</a>
            <br />
            <a href="tel:248-904-3173">248-904-3173</a>
            <br />
            <a href="https://www.linkedin.com/in/andrew-nguyen-084279179/">Linkedin</a>
            <br />
            <a href="https://github.com/arnguyen">Github</a>
          </div>
        )
    }
}

export default Contact;