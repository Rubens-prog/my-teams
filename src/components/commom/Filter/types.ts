import { TouchableOpacityProps } from "react-native";

export interface FilterStyledProps {
  active?: boolean;
}

export type FilterProps = TouchableOpacityProps &
  FilterStyledProps & {
    title: string;
  };
