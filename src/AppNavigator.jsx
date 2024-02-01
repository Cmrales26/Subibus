// Importa las librerías necesarias
import LoadingApp from "../src/components/LoadingApp";
import Welcome from "../src/components/Welcome";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screen/Login";
import Profile from "../src/screen/Profile";
import Recharge from "../src/screen/Recharge";
import { useAuth } from "./context/AuthContext";
import Home from "./screen/Home";
import Pay from "./screen/Pay";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isauth } = useAuth();
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

        {isauth ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Pay"
              component={Pay}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={Profile}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Recharge"
              component={Recharge}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
