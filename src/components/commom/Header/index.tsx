import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import * as T from "./types";
import logoImg from "@assets/logo.png";

export function Header(props: T.HeaderProps) {
  const { showBackButton = false } = props;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
