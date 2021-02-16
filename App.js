import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const addGoal = (goalTitle) => {
    setGoals((currentGoals) => [
      ...goals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setModal(false);
  };

  const cancelTask = () => {
    setModal(false);
  };

  const removeGoal = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Button title="Add new goal" onPress={() => setModal(true)} />
      <GoalInput onAddGoal={addGoal} visible={modal} onCancel={cancelTask} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoal}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
