import React from 'react';
import classNames from 'classnames';
import './portfolio.css';
import Welcome from './welcome';
import About from './about';
import Experience from './experience';
import Resume from './resume';
import Contact from './contact';

const HEADER_OPTIONS = ['Welcome', 'About', 'Experience', 'Resume', 'Contact']

class Portfolio extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          theme: 'light',
          activeView: 'Welcome'
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

    changeView = (e) => {
      this.setState({ activeView: e.target.value });
    }

    renderHeader() {
      const { theme, activeView } = this.state;

      const changeThemeTo = theme === 'light' ? 'Light Theme' : 'Dark Theme';

      return (
        <div className="header">
          <ul>
            {
              HEADER_OPTIONS.map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
                  <button
                    className={classNames('header-option', activeView === item ? 'active-view': 'hidden')}
                    type="button"
                    value={item}
                    onClick={this.changeView}
                  >
                    {item}
                  </button>
                </li>
              ))
            }
          </ul>
          <button
            id="theme-button"
            type="button"
            onClick={this.changeTheme}
          >
            { changeThemeTo }
          </button>
        </div>
      );
    }

    renderView() {
      const { activeView } = this.state;

      let view;

      switch(activeView) {
        case 'About':
          view = <About />;
          break;
        case 'Experience':
          view = <Experience />;
          break;
        case 'Resume':
          view = <Resume />;
          break;
        case 'Contact':
          view = <Contact />;
          break;
        default:
          view = <Welcome className="intro" />;
          break;
      }

      return view;
    }

    render() {
      const { theme } = this.state;

      return (
        <div className={classNames('portfolio', theme)}>
          {this.renderHeader()}
          {this.renderView()}
        </div>
      );
    }
}

export default Portfolio;