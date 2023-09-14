import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
};

export { SettingsScreen };
