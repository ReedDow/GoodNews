import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Periti</Text>
      <Text style ={styles.content}></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 30,
    fontWeight: 'bold',
  },
  content:{
    position: 'absolute',
    top: 40,
    left: 5,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    
  },
});
