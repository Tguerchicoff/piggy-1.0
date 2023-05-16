import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../Home.js'
import Users from '../../Users.js';



const CustomDrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:true}}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Usuarios" component={Users} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };
  
  export default CustomDrawerNavigator;
  