import LoadingApp from "./src/components/LoadingApp";
import Welcome from "./src/components/Welcome";
import { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" options={{ headerShown: false }}>
          {(props) => (
            <LoadingApp
              {...props}
              progress={progress}
              setProgress={setProgress}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
