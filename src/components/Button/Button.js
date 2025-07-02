import React from "react";
import {Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";

const Button = ({onButtonPress, buttonText, toDoButtonText}) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={onButtonPress} >
            <Text style={[styles.text , {color: toDoButtonText}]} >{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default Button;