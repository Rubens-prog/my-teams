import { Header } from "@components/commom/Header";
import * as S from "./styles";
import { Highlight } from "@components/commom/Highlight";
import { Button } from "@components/commom/Button";
import { Input } from "@components/commom/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createGroupStorage } from "@storage/groups/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma");
      }
      await createGroupStorage(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Something went wrong!");
        console.log(error);
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoasa"
        />

        <Input
          placeholder="Digite algo..."
          onChangeText={(value) => setGroup(value)}
        />

        <Button text="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
}
