import * as S from "./styles";
import { Highlight } from "@components/commom/Highlight";
import { Header } from "@components/commom/Header";
import { ButtonIcon } from "@components/commom/ButtonIcon";
import { Input } from "@components/commom/Input";
import { Filter } from "@components/commom/Filter";
import { PlayerCard } from "@components/commom/PlayerCard";
import { EmptyList } from "@components/utils/EmptyList";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Button } from "@components/commom/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/players/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/groups/groupRemoveByName";
import { Loading } from "@components/utils/Loading";

interface RouteParams {
  group: string;
}

export function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");

  const route = useRoute();
  const inputRef = useRef<TextInput>(null);
  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "O nome é obrigatório!");
    }

    const newPlayer = {
      name: newPlayerName,
      team: team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayers();

      setNewPlayerName("");
      inputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Erro ao cadastrar");
      }
    }
  }

  async function fetchPlayers() {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Players", "Erro ao carregar players!");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);

      fetchPlayers();

      Alert.alert("Sucesso", "Player removido");
    } catch (error) {
      throw error;
    }
  }

  async function removeGroup() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      throw error;
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          removeGroup();
        },
      },
    ]);
  }

  useEffect(() => {
    fetchPlayers();
  }, [team]);

  return (
    <>
      <S.Container>
        <Header showBackButton />

        <Highlight
          title={group}
          subtitle="adicione a galera e separe os times"
        />

        <S.Form>
          <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
            onChangeText={(text) => setNewPlayerName(text)}
            value={newPlayerName}
            inputRef={inputRef}
            onSubmitEditing={handleAddNewPlayer}
            returnKeyType="done"
          />

          <ButtonIcon icon="add" onPress={() => handleAddNewPlayer()} />
        </S.Form>
        <S.HeaderList>
          <FlatList
            data={["Time A", "Time b"]}
            keyExtractor={(item) => item}
            horizontal
            renderItem={({ item }) => (
              <Filter
                title={item}
                active={item === team}
                onPress={() => setTeam(item)}
              />
            )}
          />
          <S.NumberOFPlayers>{players.length}</S.NumberOFPlayers>
        </S.HeaderList>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={players}
            keyExtractor={(item) => item.name}
            ListEmptyComponent={() => (
              <EmptyList message="Não há pessoas nesse time" />
            )}
            renderItem={({ item }) => (
              <PlayerCard
                name={item.name}
                onRemove={() => {
                  Alert.alert("Remover", `Você deseja remover o player?`, [
                    {
                      text: "Não",
                      style: "cancel",
                    },
                    {
                      text: "Sim",
                      onPress: () => {
                        handleRemovePlayer(item.name);
                      },
                    },
                  ]);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length == 0 && { flex: 1 },
            ]}
          />
        )}
        <Button
          text="Remover Turma"
          type="secondary"
          onPress={handleRemoveGroup}
        />
      </S.Container>
    </>
  );
}
