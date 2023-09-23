import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

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
