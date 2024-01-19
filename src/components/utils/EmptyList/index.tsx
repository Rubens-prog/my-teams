import * as S from "./styles";
import * as T from "./types";

export function EmptyList(props: T.EmptyListProps) {
  const { message } = props;
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
