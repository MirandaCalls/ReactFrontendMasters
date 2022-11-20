import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      data={route.params.colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      )}
      style={styles.colorsList}
    />
  );
};

const styles = StyleSheet.create({
  colorExampleHeader: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 4,
  },
  colorsList: {
    paddingTop: 6,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
