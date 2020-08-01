import React from 'react';
import classNames from 'classnames';
import './portfolio.css';
import Intro from './intro';
import Header from './header';

const HEADER_OPTIONS = ['Welcome', 'About', 'Experience', 'Resume', 'Contact']

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

        const changeThemeTo = theme === 'light' ? 'Dark Mode' : 'Light Mode';

        return (
          <div className={classNames('portfolio', theme)}>
            <Header options={HEADER_OPTIONS} />
            <Intro className="intro" />
            <button id="theme-button" type="button" onClick={this.changeTheme}>
              { changeThemeTo }
            </button>
          </div>
        );
    }
}

export default Portfolio;