import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { getStorageGroups } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function createGroupStorage(newGroup: string) {
  try {
    const storageGroups = await getStorageGroups();

    const groupAlreadyExists = storageGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Esse grupo já existe!");
    }
    const storage = JSON.stringify([...storageGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
