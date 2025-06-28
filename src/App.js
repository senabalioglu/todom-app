import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.mainBackground} >
      <View>
        <Text style={styles.mainText} >ToDoM</Text>
        <View style={{alignItems: 'center', margin: 10}} >
        <ToDoCard />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#FFF2F1',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  mainText: {
    fontSize: 40,
    margin: 20,
  }
});

export default App;
