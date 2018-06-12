
import PropTypes from 'prop-types';
import React from 'react';

export default class Input extends React.Component {
  render() {
    const { value, disabled } = this.props;

    return (
      <div>
        <input type="text" value={value} disabled={disabled} />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}