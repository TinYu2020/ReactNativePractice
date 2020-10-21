
import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

import colors from '../config/color';

function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;