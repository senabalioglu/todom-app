import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ModalView.styles';
import Button from '../Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalView = ({toDoSet, toDoValue, list, setList}) => {

  const toDoSend = () => {
  try {
    AsyncStorage.setItem('todo', toDoValue);
    console.log(toDoValue);
    toDoSet('');
    setList([...list, toDoValue]);
  } catch (error) {
    console.log(error);
  }
}
  
  return (
    <View style={styles.modal_container}>
      <TextInput style={{margin: 15, fontSize: 18}} placeholder="ToDo girin..." value={toDoValue} onChangeText={toDoSet} />
      <Button  buttonText={"Gönder"} onButtonPress={toDoSend}/>
    </View>
  );
};

export default ModalView;
