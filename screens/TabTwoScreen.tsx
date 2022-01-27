import { Card, Text } from "react-native-elements";
import { ScrollView, StyleSheet } from "react-native";

import { View } from "../components/Themed";

const users = Array(10).fill({ id: String(Math.random()) });
const cards = Array(10).fill(null);

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {cards.map((_, key) => {
          return (
            <Card key={key} containerStyle={styles.card}>
              <Card.Title>User List</Card.Title>
              <Card.Divider />
              {users.map((user, index) => {
                return (
                  <View key={index} style={styles.user}>
                    <Text style={styles.id}>{user.id}</Text>
                  </View>
                );
              })}
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
    backgroundColor: "green",
  },
  id: {
    fontSize: 16,
    marginTop: 5,
  },
});
