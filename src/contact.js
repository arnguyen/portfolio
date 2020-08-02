import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={}
    }

    render() {
        return (
          <div id="contact">
            <p>ngandrew@umich.edu</p>
            <p>(248) 904-3173</p>
            <FontAwesomeIcon icon="linkedin" />

          </div>
        )
    }
}

export default Contact;