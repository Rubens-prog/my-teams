import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storagePlayer = await playersGetByGroup(group);

    const players = storagePlayer.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
