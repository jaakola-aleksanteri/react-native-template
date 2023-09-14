import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

const SettingsScreen = (): React.JSX.Element => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={{ color: colors.text, fontSize: 20 }}>Settings!</Text>
    </View>
  );
};

export { SettingsScreen };
