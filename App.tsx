import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { HomeScreen, SettingsScreen } from './screens';

const Tab = createBottomTabNavigator();

export interface ThemeContextType {
  theme: typeof DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<typeof DefaultTheme>>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: DefaultTheme,
  setTheme: () => {},
});

const App = (): React.JSX.Element => {
  const scheme = useColorScheme();

  const [theme, setTheme] = React.useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export { App };
