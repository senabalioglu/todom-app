import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";

const Button = ({onButtonPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onButtonPress} >
            <Text style={styles.text} >Button</Text>
        </TouchableOpacity>
    );
};

export default Button;