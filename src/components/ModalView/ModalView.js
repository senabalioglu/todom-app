import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ModalView.styles';
import Button from '../Button/Button';

const ModalView = () => {
  return (
    <View style={styles.modal_container}>
      <TextInput style={{margin: 15, fontSize: 18}} placeholder="ToDo girin..." />
      <Button  buttonText={"Gönder"} onButtonPress={() => {}}/>
    </View>
  );
};

export default ModalView;
