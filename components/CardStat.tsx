import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Text, View } from "react-native";

type PropsType = {
  cardNumber: number;
  cardLabel: string;
  borderLeftColor: string;
  iconName: "list" | "checkmark-circle" | "time";
  iconBackground: [ColorValue, ColorValue, ...ColorValue[]];
};

const CardStat = (props: PropsType) => {
  const { cardNumber, cardLabel, borderLeftColor, iconName, iconBackground } =
    props;
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={[settingsStyle.statCard, { borderLeftColor: borderLeftColor }]}
    >
      <View style={settingsStyle.statIconContainer}>
        <LinearGradient colors={iconBackground} style={settingsStyle.statIcon}>
          <Ionicons name={iconName} size={20} color="#fff" />
        </LinearGradient>
      </View>
      <View>
        <Text style={settingsStyle.statNumber}>{cardNumber}</Text>
        <Text style={settingsStyle.statLabel}>{cardLabel}</Text>
      </View>
    </LinearGradient>
  );
};

export default CardStat;
