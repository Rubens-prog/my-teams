import * as S from "./styles";
import * as T from "./types";

export function ButtonIcon(props: T.ButtonIconProps) {
  const { variant = "primary", icon, ...rest } = props;

  return (
    <>
      <S.Container {...rest}>
        <S.Icon name={icon} variant={variant} />
      </S.Container>
    </>
  );
}
