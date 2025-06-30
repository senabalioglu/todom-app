import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

const ToDoCard = ({toDoText, onDeleteToDo, onEditToDo}) => {

  const[selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  }

  const isSelectedStyle = {
    textDecorationLine: selected ? 'line-through' : 'none',
    fontSize: 20,
    marginLeft: 15,
    color: '#7f7f7f',
  };

  return (
    <View style={styles.card}>
      <CheckBox
      value = {selected}
      onValueChange={toggleSelected}
      />
      <Text style={isSelectedStyle}>{toDoText}</Text>
      <View style={styles.inner_container}>
        <TouchableOpacity onPress={onEditToDo}>
          <Icon style={styles.icon} name="pencil" size={25} color="#7f7f7f" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDeleteToDo}>
          <Icon style={styles.icon} name="trash" size={25} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoCard;
