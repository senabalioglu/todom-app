import React from "react";
import { View, Text } from "react-native";
import styles from "./ToDoCard.styles";
import Icon from 'react-native-vector-icons/Ionicons';

const ToDoCard = ({toDoText}) => {
    return (
        <View style={styles.card} >
            <Icon name="heart" size={25} color="white" />
            <Text style={styles.card_text} >{toDoText}</Text>
            <View style={styles.inner_container} >
                <Icon style={styles.icon}  name="pencil" size={25} color="white" />
                <Icon style={styles.icon} name="trash" size={25} color="white" />
            </View>
        </View>
    );
}

export default ToDoCard;