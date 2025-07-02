import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

const ToDoCard = ({
  toDoText,
  onDeleteToDo,
  onEditToDo,
  toDoTextTheme,
  iconTheme,
  checkBoxTrueTheme,
  checkBoxFalseTheme,
}) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.card}>
      <CheckBox
        tintColors={{
          true: checkBoxTrueTheme,
          false: checkBoxFalseTheme,
        }}
        value={selected}
        onValueChange={toggleSelected}
      />
      <View style={styles.todo_text_view} >
        <Text
        numberOfLines={4}
        ellipsizeMode='tail'
        style={[
          styles.todo_text,
          {
            textDecorationLine: selected ? 'line-through' : 'none',
            color: toDoTextTheme,
          },
        ]}>
        {toDoText}
      </Text>
      </View>
      <View style={styles.inner_container}>
        <TouchableOpacity onPress={onEditToDo}>
          <Icon
            style={{marginRight: 10, color: iconTheme}}
            name="pencil"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteToDo}>
          <Icon style={{color: iconTheme}} name="trash" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoCard;
