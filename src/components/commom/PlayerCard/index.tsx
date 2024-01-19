import { ButtonIcon } from "../ButtonIcon";
import * as S from "./styles";
import * as T from "./types";

export function PlayerCard(props: T.PlayerCardProps) {
  const { name, onRemove } = props;
  return (
    <S.Container>
      <S.Icon />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" variant="secondary" onPress={onRemove} />
    </S.Container>
  );
}
