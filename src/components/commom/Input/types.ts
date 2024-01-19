import { TextInput, TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};
