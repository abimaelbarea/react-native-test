import { Button, Input } from "react-native-elements";

import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Input placeholder="BASIC INPUT" />
      <Button title="Hey! This is a test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
