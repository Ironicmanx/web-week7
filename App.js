import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/screen1';
import StatusBarComponent from './bars/statusbar';

export default function App() {
  return (
    <>
      <View style={styles.statusbar}>
        <StatusBarComponent />
      </View>
      <View style={styles.container}>
        <Screen1 />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 250,
    justifyContent: 'center',
  },
  statusbar: {
    height: 50, 
    backgroundColor: '#fff',
    alignContent: 'center',
    marginTop: 50,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
