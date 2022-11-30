import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text>You don't have any Notifications!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E5E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});