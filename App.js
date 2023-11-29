import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Lara Tracker</Text>
      <View style={styles.mainContainer}>
        <Button iconName="baby-bottle-outline" label="Feeding" />
        <Button iconName="sleep" label="Sleeping" />
        <Button iconName="thermometer" label="Temperature" />
        <Button iconName="water-outline" label="Pee" />
        <Button iconName="emoticon-poop" label="Poop" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60,
  },
  mainContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    padding: 30,
    gap: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    padding: 30,
    gap: 20,
  },
});
