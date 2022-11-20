import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import ColorPalettePreview from '../components/ColorPalettePreview';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // input params
  const newPalette = route.params ? route.params.newPalette : null;

  const loadPalettes = async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (res.ok) {
      let palettes = await res.json();
      setPalettes(palettes);
    }
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  }, []);

  useEffect(() => {
    loadPalettes();
  }, []);

  useEffect(() => {
	if (newPalette !== null) {

	setPalettes((current) => {
		return [newPalette, ...current];	
	});
	}
  }, [newPalette]);

  return (
    <FlatList
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Color Palette', {
              title: item.paletteName,
              colors: item.colors,
            });
          }}
          key={item.id}
        >
          <ColorPalettePreview name={item.paletteName} colors={item.colors} />
        </TouchableOpacity>
      )}
      style={styles.paletteList}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.addPaletteButton}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  paletteList: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  addPaletteButton: {
    color: '#3FB8AF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Home;
