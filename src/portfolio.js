import React from 'react';
import classNames from 'classnames';
import './portfolio.css';
import Intro from './intro';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light'
        };
    }

    changeTheme = () => {
        const { theme } = this.state;

        if (theme === 'light') {
            this.setState({ theme: 'dark' });
        } else {
            this.setState({ theme: 'light' });
        }
    };

    render() {
        const { theme } = this.state;

        return (
          <div className={classNames('portfolio', theme)}>
            <Intro />
            <button type="button" onClick={this.changeTheme}>Change theme</button>
          </div>
        );
    }
}

export default Portfolio;