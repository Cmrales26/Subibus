// Importa las librerías necesarias
import LoadingApp from "../src/components/LoadingApp";
import Welcome from "../src/components/Welcome";
import { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/screen/Login";
import Main from "../src/screen/Main";
import Profile from "../src/screen/Profile";
import { useAuth } from "./context/AuthContext";

// ... Resto de tus importaciones ...

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
              component={Main}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={Profile}
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
