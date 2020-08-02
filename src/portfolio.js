import React from 'react';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';
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
          activeView: 'Welcome',
          visitorName: '',
          formSubmitted: false
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

    onSubmit = (e) => {
      e.preventDefault();
      this.setState({ formSubmitted: true });
    };

    handleChange = (e) => {
      this.setState({ visitorName: e.target.value });
    };

    form = () => {
      const { visitorName } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" value={visitorName} onChange={this.handleChange} />
          <input className="submit" type="submit" value="Introduce yourself" />
        </form>
      );
    };

    welcome = () => {
      const { visitorName, formSubmitted } = this.state;

      return (
        <div id="welcome">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello. ')
                .pauseFor(500)
                .start();
              typewriter.typeString("I'm Andrew. ")
                .pauseFor(500)
                .start()
              typewriter.typeString("What's your name?")
                .pauseFor(500)
                .start()
            }}
          />
          {this.form()}
          {
            formSubmitted
            && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(`Hello, ${visitorName}!`)
                  .pauseFor(1000)
                  .start();
              }}
            />
            )
          }
        </div>
      );
    };

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
          view = this.welcome();
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