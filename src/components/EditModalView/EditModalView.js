import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../ModalView/ModalView.styles';
import Button from '../Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditModalView = ({}) => {

  return (
    <View>
      <TextInput/>
      <Button buttonText={'Güncelle'} onButtonPress={null} />
    </View>
  );
};

export default EditModalView;
