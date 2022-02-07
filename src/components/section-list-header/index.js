import React, {useState} from 'react';
import {View, TouchableHighlight, StyleSheet, Image} from 'react-native';
import {AppText} from '..';
import {Colors, DIMENSIONS, Icons} from '../../constants';

export const SectionListHeader = ({item, index, isUnOrdered = false}) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableHighlight
        style={styles.sectionHeader}
        underlayColor={Colors.ui_grey_4}
        onPress={() => setExpanded(!isExpanded)}>
        {isUnOrdered ? (
          <View style={styles.rowCenter}>
            <Image
              style={[
                styles.iconArrow,
                {transform: [{rotateX: isExpanded ? '180deg' : '0deg'}]},
              ]}
              source={Icons.arrow_down}
            />
            <AppText>{`${item.title}`}</AppText>
          </View>
        ) : (
          <AppText>{`${index + 1}. ${item.title}`}</AppText>
        )}
      </TouchableHighlight>
      {isExpanded ? (
        <View>
          {item.data.map((subItem, subIndex) => {
            return (
              <TouchableHighlight
                key={String(subIndex)}
                onPress={() => {}}
                style={styles.item}
                underlayColor={Colors.ui_grey_4}>
                {isUnOrdered ? (
                  <View style={styles.rowCenter}>
                    <View style={styles.unOrderedDot} />
                    <AppText>{`${subItem}`}</AppText>
                  </View>
                ) : (
                  <AppText>{`${index + 1}.${subIndex + 1} ${subItem}`}</AppText>
                )}
              </TouchableHighlight>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,
    backgroundColor: Colors.ui_white,
  },
  item: {
    padding: 10,
    paddingStart: DIMENSIONS.WIDTH / 7,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unOrderedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.ui_black,
    marginEnd: 10,
  },
  iconArrow: {
    width: 18,
    height: 18,
    marginEnd: 10,
  },
});
