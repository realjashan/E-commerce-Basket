import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductScreen from "./screens/ProductScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import FavouriteScreen from "./screens/FavouriteScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
 
import LoginScreen from "./auth/screens/LoginScreen";
import SignupScreen from "./auth/screens/SignupScreen";
import ProductDetail from "./screens/ProductDetail";
import IconButton from "./auth/components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FavouriteContextProvider from "./store/Basket";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();

  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor:'#E6E3D3' },
          headerTintColor: "black",
          contentStyle: { backgroundColor:'white' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    const authCtx = useContext(AuthContext);

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ProductScreen}
          options={{
tabBarActiveTintColor:'#FF9900',


            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />

            ),

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Fav"
          component={FavouriteScreen}
          options={{
            tabBarActiveTintColor:'#FF9900',
         
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
      <FavouriteContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor:'#E6E3D3'  },
          headerTintColor: "black",
          contentStyle: { backgroundColor:'white' },
        }}
      >
        <Stack.Screen
          name="Product"
          component={MyTabs}
          options={{
           headerShown:false,
          }}
        />

         <Stack.Screen name="Details" component={ProductDetail} />


      </Stack.Navigator>
      </FavouriteContextProvider>
    );
  }

  function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
    );
  }

  function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState();

    const authCtx = useContext(AuthContext);

    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem("token1");

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }

        setIsTryingLogin(false);
      }

      fetchToken();
    }, []);

    if (isTryingLogin) {
      return <AppLoading />;
    }

    return <Navigation />;
  }

  // export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

// const FavouriteProductCtx = useContext(FavouriteContext);

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={ProductScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Fav"
//         component={FavouriteScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="star" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// return (
//   <FavouriteContextProvider>

//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Product" component={MyTabs} />
//         <Stack.Screen name="Details" component={ProductDetail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </FavouriteContextProvider>
// );
// }

const styles = StyleSheet.create({});
