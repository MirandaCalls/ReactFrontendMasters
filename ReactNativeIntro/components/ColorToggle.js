import React, { useState, useCallback } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ColorToggle = ({
  colorName,
  colorHex,
  onTogglePress = (result) => {},
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const onPress = useCallback((newValue) => {
    setIsEnabled(newValue);
    onTogglePress({ colorName, colorHex, enabled: newValue });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.colorName}>{colorName}</Text>
      <Switch value={isEnabled} onValueChange={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  colorName: {
    fontSize: 16,
  },
});

export default ColorToggle;
