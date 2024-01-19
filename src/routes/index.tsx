import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

export function Routes() {
  const { COLORS } = useTheme();

  const styles = {
    flex: 1,
    backgroundColor: COLORS.GRAY_600,
  };

  return (
    <View style={styles}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
