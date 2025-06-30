import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../ModalView/ModalView.styles';
import Button from '../Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditModalView = ({editedValue, setEdited, sendEdited}) => {
  return (
    <View
      style={styles.modal_container}>
      <TextInput
        style={{margin: 15, fontSize: 18, fontFamily: 'RobotoSlab-Regular'}}
        placeholder="Güncel ToDo"
        value={editedValue}
        onChangeText={setEdited}
      />
      <Button buttonText={'Güncelle'} onButtonPress={sendEdited} />
    </View>
  );
};

export default EditModalView;
