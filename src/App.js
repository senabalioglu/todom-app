import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import {StyleSheet} from 'react-native';
import Button from './components/Button/Button';

function App() {
  return (
    <SafeAreaView style={styles.mainBackground}>
      <Text style={styles.mainText}>ToDoM</Text>
      <ScrollView>
        <ToDoCard />
      </ScrollView>
      <Button />
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
  },
});

export default App;
