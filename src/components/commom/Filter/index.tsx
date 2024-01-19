import * as S from "./styles";
import * as T from "./types";

export function Filter(props: T.FilterProps) {
  const { active = false, title, ...rest } = props;

  return (
    <S.Container active={active} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
