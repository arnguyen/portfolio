import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state={}
    }

    render() {
        const { options } = this.props;

        return (
          <div>
            {
              // eslint-disable-next-line react/no-array-index-key
              options.map((item, i) => <li key={i}><button type="button">{item}</button></li>)
            }
          </div>
        );
    }
}

Header.propTypes = {
    options: PropTypes.instanceOf(Array)
}

Header.defaultProps = {
    options: []
}


export default Header;