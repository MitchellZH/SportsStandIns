import { Button, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const CreateTeam = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>This is the Create a Team Page</Text>
        <Button title="Back" onPress={() => navigation.navigate("Register")} />
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
        />
      </Box>
    </NativeBaseProvider>
  );
};
export default CreateTeam;
