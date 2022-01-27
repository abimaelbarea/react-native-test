import { Button, CheckBox, Divider, Input } from "react-native-elements";
import { Controller, useForm } from "react-hook-form";

import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

export enum FormFields {
  name = "name",
  surname = "surname",
  email = "email",
}

export type FormData = {
  [FormFields.name]: string;
  [FormFields.surname]: string;
  [FormFields.email]: boolean;
};

export type UserFormProps = {
  onSubmit: (data: FormData) => void;
};

export default function UserForm({ onSubmit }: UserFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      [FormFields.name]: "",
      [FormFields.surname]: "",
      [FormFields.email]: false,
    },
  });

  return (
    <View style={styles.container}>
      <form>
        <Controller
          name={FormFields.name}
          control={control}
          render={({ field }) => (
            <Input
              style={styles.textInput}
              placeholder="Name"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          name={FormFields.surname}
          control={control}
          render={({ field }) => (
            <Input
              style={styles.textInput}
              placeholder="Surname"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <Divider width={5} />
        <Controller
          name={FormFields.email}
          control={control}
          render={({ field }) => (
            <CheckBox
              title="Recieve Emails"
              checked={field.value}
              onPress={() => field.onChange(!field.value)}
            />
          )}
        />
        <Button title="Submit" onPress={() => handleSubmit(onSubmit)()} />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "white",
  },
});
