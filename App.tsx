import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { Loading } from "@components/utils/Loading";
import { StatusBar } from "react-native";
import { Routes } from "@routes/index";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={"transparent"}
        />
        {isFontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
