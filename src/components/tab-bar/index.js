import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Icons} from '../../constants';
import {AppText} from '..';
import {FontTypes} from '../../constants/font-types';

export const TabBar = ({tabs, iconOnly, isInlineGhost}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabItemPress = (item) => {
    setSelectedTab(item);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tabItem, tebIndex) => {
        let isSelected = tabItem.title == selectedTab.title ? true : false;
        return (
          <View key={String(tebIndex)} style={{flexGrow: 1}}>
            <View style={{flexGrow: 1, opacity: isSelected ? 1 : 0.5}}>
              <TouchableOpacity
                style={styles.tabItem(isSelected, isInlineGhost)}
                onPress={() => onTabItemPress(tabItem)}>
                {iconOnly ? (
                  <Image
                    style={styles.tabIcon(isSelected)}
                    source={tabItem.icon}
                  />
                ) : (
                  <AppText
                    size={14}
                    fontType={FontTypes.medium}
                    color={Colors.ui_black}
                    uppercase>
                    {tabItem.title}
                  </AppText>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.bottomIndicator(isSelected)} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.ui_white,
    marginBottom: 10,
  },
  tabItem: function (isSelected, isInlineGhost) {
    return {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isInlineGhost
        ? Colors.ui_white
        : isSelected
        ? '#A3A3A3'
        : '#C4C4C4',
      padding: 12,
    };
  },
  bottomIndicator: function (isSelected) {
    return {
      width: '100%',
      height: 3,
      backgroundColor: isSelected ? '#323232' : Colors.ui_white,
    };
  },
  tabIcon: function (isSelected) {
    return {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: isSelected ? Colors.ui_black : Colors.ui_grey_2,
    };
  },
});

TabBar.propTypes = {
  tabs: PropTypes.array,
  iconOnly: PropTypes.bool,
  isInlineGhost: PropTypes.bool,
};

TabBar.defaultProps = {
  tabs: [
    {title: 'Item One', icon: Icons.home},
    {title: 'Item Two', icon: Icons.home},
    {title: 'Item Three', icon: Icons.home},
  ],
  iconOnly: false,
  isInlineGhost: false,
};
