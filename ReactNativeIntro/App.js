import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const rootStack = createStackNavigator();
const mainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShadowVisible: true }}
      />
      <mainStack.Screen
        name="Color Palette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.title })}
      />
    </mainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <rootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <rootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <rootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
