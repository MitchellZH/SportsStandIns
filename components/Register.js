import { Button, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const Register = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>This is the Register Page</Text>
        <Button
          title="Submit"
        />
        <Button
          title="Create a Team"
          onPress={() => navigation.navigate("Create")}
        />
        <Button
          title="Join a Team"
          onPress={() => navigation.navigate("Join")}
        />
      </Box>
    </NativeBaseProvider>
  );
};
export default Register;
