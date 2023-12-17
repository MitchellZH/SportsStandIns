import { View, Text, Button } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const TeamPage = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <Box>
          <Text>This is Team Page</Text>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
          <Button title="Team" onPress={() => navigation.navigate("Team")} />
          <Button title="Games" onPress={() => navigation.navigate("Games")} />
          <Button
            title="Notifications"
            onPress={() => navigation.navigate("Notifications")}
          />
          <Button
            title="Profile"
            onPress={() => navigation.navigate("Profile")}
          />
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
export default TeamPage;
