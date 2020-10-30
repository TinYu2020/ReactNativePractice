import React from "react";
import { StyleSheet, Text } from "react-native";

import defaultStyle from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: defaultStyle.text,
});

export default AppText;
