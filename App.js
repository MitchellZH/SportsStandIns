import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import JoinTeam from "./components/JoinTeam";
import CreateTeam from "./components/CreateTeam";
import TeamPage from "./components/TeamPage";
import ScheduleGame from "./components/ScheduleGame";
import ProfilePage from "./components/ProfilePage";
import Games from "./components/Games";
import Notifications from "./components/Notifications"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Join" component={JoinTeam} />
        <Stack.Screen name="Create" component={CreateTeam} />
        <Stack.Screen name="Team" component={TeamPage} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Schedule" component={ScheduleGame} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}