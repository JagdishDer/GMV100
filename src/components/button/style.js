import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export default StyleSheet.create({
  buttonContainer: function (type, size, disabled) {
    return {
      height: getButtonHeight(size),
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: Colors.ui_button_black,
      // opacity: disabled ? 0.5 : 1,
      backgroundColor: getBgColor(type, disabled),
      borderWidth: 1,
      borderColor: getBorderColor(type, disabled),
    };
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function getButtonHeight(size) {
  switch (size) {
    case 'default':
      return 48;

    case 'medium':
      return 40;

    case 'small':
      return 32;

    default:
      return 48;
  }
}

function getBgColor(type, disabled) {
  switch (type) {
    case 'default':
      if (disabled) {
        return Colors.ui_button_disabled;
      }
      return Colors.ui_button_black;
    case 'danger':
      return Colors.ui_button_danger;
    case 'outline':
      return Colors.ui_white;
    case 'text':
      return Colors.ui_white;
    default:
      return Colors.ui_button_black;
  }
}

export function getTextColor(type) {
  switch (type) {
    case 'default':
      return Colors.ui_white;
    case 'danger':
      return Colors.ui_white;
    case 'outline':
      return Colors.ui_button_black;
    case 'text':
      return Colors.ui_button_black;
    default:
      return Colors.ui_white;
  }
}

const getBorderColor = (type, disabled) => {
  switch (type) {
    case 'default':
      return Colors.ui_transparent;
    case 'danger':
      return Colors.ui_transparent;
    case 'outline':
      return Colors.ui_button_black;
    case 'text':
      return Colors.ui_transparent;
    default:
      return Colors.ui_transparent;
  }
};
