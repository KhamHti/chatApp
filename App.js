import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { Provider } from "react-redux";
import store from "./context/store";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Sign In" component={Login} />
        <Stack.Screen name="Sign Up" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   <Provider store={store}>
//     <AppNavigator />
//   </Provider>;
// };

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Sign In" component={Login} />
          <Stack.Screen name="Sign Up" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
