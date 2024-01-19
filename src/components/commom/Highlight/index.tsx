import * as S from "./styles";
import * as T from "./types";

export function Highlight(props: T.HighlightProps) {
  const { title, subtitle } = props;
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
