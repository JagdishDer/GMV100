import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../../constants';
import PropTypes from 'prop-types';

export const AppText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: props.size,
          color: props.color,
          textTransform: props.uppercase ? 'uppercase' : 'none',
        },
      ]}
    />
  );
};

AppText.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
};

AppText.defaultProps = {
  size: 14,
  color: Colors.ui_black,
  uppercase: false,
};
