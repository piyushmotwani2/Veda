import * as React from 'react';
import { Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Schedule from '../login/Schedule';
import Attendance from '../login/Attendance';
import Marks from '../login/Marks';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Schedule"
      tabBarOptions={{
        activeTintColor: '#6C5CBD',
        inactiveTintColor: '#A19A9A',
        style: {
          backgroundColor: '#fff'
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#6C5CBD',
          borderBottomWidth: 2,
          alignItems:'center',
          alignContent:'center',
          justifyContent: 'center'
        },
      }}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
        }}  />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: 'Attendance',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
        <Tab.Screen
        name="Marks"
        component={Marks}
        options={{
          tabBarLabel: 'Marks',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <NavigationContainer>
    <View style={{"alignItems": "flex-start"}}>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 21,
        "paddingTop": 18,
        "width": 75,
        "height": 120,
        "borderRadius": 37.5,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    </View>
    
    </View>
      <Stack.Navigator
        initialRouteName="Schedule"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={TabStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;