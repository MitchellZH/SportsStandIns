import { Button, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const ScheduleGame = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>This is the Schedule Page</Text>
        <Button title="Games" onPress={() => navigation.navigate("Games")} />
      </Box>
    </NativeBaseProvider>
  );
};
export default ScheduleGame;
