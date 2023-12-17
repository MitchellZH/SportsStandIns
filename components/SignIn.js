import { Button, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const SignIn = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>This is the Sign In Page</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </Box>
    </NativeBaseProvider>
  );
};
export default SignIn