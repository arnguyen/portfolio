import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light'
        };
    }

    render() {
        const { theme } = this.state;

        return (
          <div className={theme}>
            <h1>Hello World!</h1>
          </div>
        );
    }
}

export default Portfolio;