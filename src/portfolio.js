import React from 'react';
import classNames from 'classnames';
import './portfolio.css';
import Welcome from './welcome';

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
      e.target.style.id = 'active-view';
    }

    renderHeader() {
      const { theme } = this.state;

      const changeThemeTo = theme === 'light' ? 'Dark Mode' : 'Light Mode';

      return (
        <div>
          {
            HEADER_OPTIONS.map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>
                <button
                  className={classNames('header-option',)}
                  type="button"
                  value={item}
                  onClick={this.changeView}
                >
                  {item}
                </button>
              </li>
            ))
          }
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
          break;
        case 'Experience':
          break;
        case 'Resume':
          break;
        case 'Contact':
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