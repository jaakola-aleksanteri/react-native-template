import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ThemeContext } from '../App';

const HomeScreen = (): React.JSX.Element => {
  const { colors } = useTheme();

  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === DefaultTheme ? DarkTheme : DefaultTheme;
    setTheme(newTheme);
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{ color: colors.text, fontSize: 20 }}>Home!</Text>
      <Button title="change Theme" onPress={toggleTheme} />
    </View>
  );
};

export { HomeScreen };
