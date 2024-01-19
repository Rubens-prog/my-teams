import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { Header } from "@components/commom/Header";
import { Highlight } from "@components/commom/Highlight";
import { GroupCard } from "@components/commom/GroupCard";
import { FlatList } from "react-native";
import { EmptyList } from "@components/utils/EmptyList";
import { Button } from "@components/commom/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getStorageGroups } from "@storage/groups/groupGetAll";
import { Loading } from "@components/utils/Loading";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await getStorageGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => {
                handleOpenGroup(item);
              }}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button text="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
