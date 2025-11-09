import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import CardStat from "./CardStat";

const ProgressStats = () => {
  //color
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  //list todo
  const todos = useQuery(api.todos.getTodos);

  const completedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const totalCount = todos ? todos.length : 0;
  const activeCount = totalCount - completedCount;

  const progressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  //tinh so todo
  //tinh so todo da hoan thanh
  //so todo chua hoan thanh
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyle.statsContainer}>
        <CardStat
          borderLeftColor={colors.primary}
          iconName="list"
          iconBackground={colors.gradients.primary}
          cardLabel="Total todos"
          cardNumber={totalCount}
        />
        <CardStat
          borderLeftColor={colors.success}
          iconName="checkmark-circle"
          iconBackground={colors.gradients.success}
          cardLabel="Completed"
          cardNumber={completedCount}
        />
        <CardStat
          borderLeftColor={colors.warning}
          iconName="time"
          iconBackground={colors.gradients.warning}
          cardLabel="Active todo"
          cardNumber={activeCount}
        />
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
