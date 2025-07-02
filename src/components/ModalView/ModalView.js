import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './ModalView.styles';
import Button from '../Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalView = ({toDoSet, toDoValue, list, setList, toggle}) => {
  const [inputHeight, setInputHeight] = useState(40);

  const toDoSend = () => {
    if (toDoValue) {
      try {
        AsyncStorage.setItem('todo', toDoValue);
        console.log(toDoValue);
        toDoSet('');
        const updatedList = [...list, toDoValue];
        setList(updatedList);
        AsyncStorage.setItem('todoList', JSON.stringify(updatedList));
        toggle();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.modal_container}>
      <View>
        <TextInput
          multiline
          onContentSizeChange={e =>
            setInputHeight(e.nativeEvent.contentSize.height)
          }
          scrollEnabled
          style={styles.text_input}
          placeholder="ToDo girin..."
          value={toDoValue}
          onChangeText={toDoSet}
        />
      </View>
      <Button buttonText={'Gönder'} onButtonPress={toDoSend} />
    </View>
  );
};

export default ModalView;
