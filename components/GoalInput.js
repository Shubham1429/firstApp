import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleInput = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input}
          onChangeText={goalInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={handleInput} disabled={!enteredGoal} />
          </View>
          <View>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    padding: 10,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
