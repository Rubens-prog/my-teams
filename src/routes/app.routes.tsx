import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewGroup } from "@screens/Groups/Create";
import { Groups } from "@screens/Groups/List";
import { Players } from "@screens/Players/List";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="groups" component={Groups} />
        <Screen name="new" component={NewGroup} />
        <Screen name="players" component={Players} />
      </Navigator>
    </>
  );
}
