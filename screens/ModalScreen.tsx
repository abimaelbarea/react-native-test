import { Platform, StyleSheet } from "react-native";

import { Chip } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Chip
        title="Disabled Chip"
        disabled
        containerStyle={{ marginVertical: 15 }}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
