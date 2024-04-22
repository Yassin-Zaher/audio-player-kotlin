import {
  View,
  Text,
  StyleSheet,
  PressableProps,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface NavButtonProps {
  title: string;
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        title === "All" ? styles.allButton : null, // Conditionally apply styles
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 5,
    margin: 8,
    backgroundColor: "#E5E5E5",
  },
  allButton: {
    backgroundColor: "#F92457",
    color: "white", // Custom background color for "All"
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#464646",
  },
});

export default NavButton;
