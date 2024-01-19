import { useTheme } from "styled-components/native";
import * as S from "./styles";
import * as T from "./types";

export function Input(props: T.InputProps) {
  const { inputRef, ...rest } = props;
  const { COLORS } = useTheme();
  return (
    <>
      <S.Container
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </>
  );
}
