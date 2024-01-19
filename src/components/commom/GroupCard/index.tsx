import * as S from "./styles";
import * as T from "./types";

export function GroupCard(props: T.GroupCardProps) {
  const { title, ...rest } = props;

  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
