import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };

  const useDarkText = parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1;
  const textStyle = useDarkText ? styles.colorBoxBlackText : styles.colorBoxWhiteText;

  return (
    <View style={[styles.colorBox, boxColor]}>
      <Text style={textStyle}>
        {colorName} {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  colorBoxWhiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  colorBoxBlackText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ColorBox;
