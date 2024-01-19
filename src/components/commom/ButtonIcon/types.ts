import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export type ButtonIconProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary";
  icon?: keyof typeof MaterialIcons.glyphMap;
};
