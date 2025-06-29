import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoCard = ({toDoText, onDeleteToDo, onEditToDo, toggleVisible}) => {

  return (
    <View style={styles.card}>
      <Icon name="heart" size={25} color="white" />
      <Text style={styles.card_text}>{toDoText}</Text>
      <View style={styles.inner_container}>
        <TouchableOpacity onPress={toggleVisible}>
          <Icon style={styles.icon} name="pencil" size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDeleteToDo}>
          <Icon style={styles.icon} name="trash" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoCard;
