import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  text?: string;
  type?: "primary" | "secondary";
};
