import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ColorPalettePreview = ({ name, colors }) => {
  const firstColors = colors.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={firstColors}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View
            style={[styles.colorSquare, { backgroundColor: item.hexCode }]}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  list: { flexDirection: 'row' },
  colorSquare: {
    height: 50,
    width: 50,
    marginRight: 10,
    elevation: 5, // Android
    shadowColor: '#030002', // Android, iOS & Web
    shadowOpacity: 0.25, // iOS & Web
    shadowRadius: 2, // iOS & web
    shadowOffset: { width: 0, height: 2 },
  },
});

export default ColorPalettePreview;
