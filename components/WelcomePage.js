import React from "react";
import { Text, Button } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const WelcomePage = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Text>This is the Welcome Page</Text>
      </Box>
    </NativeBaseProvider>
  );
};
export default WelcomePage;
