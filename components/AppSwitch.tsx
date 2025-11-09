import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Switch, Text, View } from "react-native";

type PropsType = {
  value: boolean;
  onValueChange: (newValue: boolean) => void; //callback function
  falseTrackColor: ColorValue;
  trueTrackColor: ColorValue;
  iconName: "moon" | "checkmark-circle" | "time";
  iconBackground: [ColorValue, ColorValue, ...ColorValue[]];
  switchLabel: string
};

const AppSwitch = (props: PropsType) => {
  const {
    value,
    onValueChange,
    falseTrackColor,
    trueTrackColor,
    iconName,
    iconBackground,
    switchLabel
  } = props;
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);

  return (
    <View style={settingsStyle.settingItem}>
      <View style={settingsStyle.settingLeft}>
        <LinearGradient
          colors={iconBackground}
          style={settingsStyle.settingIcon}
        >
          <Ionicons name={iconName} size={18} color="#fff" />
        </LinearGradient>
        <Text style={settingsStyle.settingText}>{switchLabel}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: falseTrackColor, true: trueTrackColor }}
        ios_backgroundColor={falseTrackColor}
      />
    </View>
  );
};

export default AppSwitch;
