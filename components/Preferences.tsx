import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text } from "react-native";
import AppSwitch from "./AppSwitch";

const Preferences = () => {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingsStyle = createSettingsStyles(colors);

  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Progress Stats</Text>

      <AppSwitch
        iconName="moon"
        iconBackground={colors.gradients.primary}
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        falseTrackColor={colors.border}
        trueTrackColor={colors.primary}
        switchLabel="Dark mode"
      />
      <AppSwitch
        iconName="moon"
        iconBackground={colors.gradients.warning}
        value={isNotificationsEnabled}
        onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
        falseTrackColor={colors.border}
        trueTrackColor={colors.warning}
        switchLabel="Notification"
      />
      <AppSwitch
        iconName="moon"
        iconBackground={colors.gradients.success}
        value={isAutoSync}
        onValueChange={() => setIsAutoSync(!isAutoSync)}
        falseTrackColor={colors.border}
        trueTrackColor={colors.success}
        switchLabel="Auto Sync"
      />
    </LinearGradient>
  );
};

export default Preferences;
