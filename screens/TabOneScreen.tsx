import { RootTabScreenProps } from "../types";
import { ScrollView } from "react-native";
import UserForm from "../components/UserForm";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <UserForm onSubmit={(value) => console.log(value)}></UserForm>
    </ScrollView>
  );
}
