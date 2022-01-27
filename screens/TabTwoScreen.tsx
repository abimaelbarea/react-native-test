import { Card, Text } from "react-native-elements";
import { ScrollView, StyleSheet } from "react-native";

import { View } from "../components/Themed";

type User = {
  id: string;
};

type UserProps = {
  user: User;
};

function UserRow({ user }: UserProps) {
  return (
    <View style={styles.user}>
      <Text style={styles.id}>{user.id}</Text>
    </View>
  );
}

const users: User[] = Array(10).fill({ id: String(Math.random()) });
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
              {users.map((user, index) => (
                <UserRow key={index} user={user} />
              ))}
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
