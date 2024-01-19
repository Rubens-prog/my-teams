import * as S from "./styles";
import * as T from "./types";

export function Button(props: T.ButtonProps) {
  const { text, type = "primary", ...rest } = props;
  return (
    <S.Container type={type} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
