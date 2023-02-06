import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './src/styles/general'
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent/>
      <Home/>
    </View>
  );
}
