import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import React from "react";
import TabOneScreen from "../../screens/TabOneScreen";
import TabTwoScreen from "../../screens/TabTwoScreen";
import Blog from "../../screens/Blog";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
      <Tab.Navigator
        sceneContainerStyle={styles.container}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Blog') {
              iconName = focused ? 'logo-bitcoin' : 'logo-bitcoin';
            } else if (route.name === 'Market') {
              iconName = focused ? 'podium' : 'podium';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#ABFB5C',
          tabBarStyle: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            marginTop: -40,
          }
        })}>
        <Tab.Screen name="Home" component={TabOneScreen} />
        <Tab.Screen name="Blog" component={Blog} />
        <Tab.Screen name="Market" component={TabTwoScreen} />
        <Tab.Screen name="Settings" component={TabTwoScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20
  },

}
)

export default NavBar;