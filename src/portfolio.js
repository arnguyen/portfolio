import React from 'react';
import classNames from 'classnames';
import Switch from 'react-switch';
import './portfolio.css';
import Welcome from './welcome';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Resume from './resume';
import Contact from './contact';

const HEADER_OPTIONS = ['Welcome', 'About', 'Experience', 'Skills', 'Resume', 'Contact']

class Portfolio extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          theme: 'light',
          activeView: 'Welcome',
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
  };

  renderHeader() {
    const { theme, activeView } = this.state;

    const activeTheme = theme === "light" ? "Light Mode" : "Dark Mode";

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
        <p>{activeTheme}</p>
        <Switch
          onChange={this.changeTheme}
          checked={theme === 'light'}
          checkedIcon={false}
          onColor="#87ceeb"
          uncheckedIcon={false}
          offColor="#000080"
        />
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
      case 'Skills':
        view = <Skills />;
        break;
      case 'Resume':
        view = <Resume />;
        break;
      case 'Contact':
        view = <Contact />;
        break;
      default:
        view = <Welcome />;
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