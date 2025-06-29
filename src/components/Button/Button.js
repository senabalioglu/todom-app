import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";

const Button = () => {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.text} >Button</Text>
        </TouchableOpacity>
    );
};

export default Button;