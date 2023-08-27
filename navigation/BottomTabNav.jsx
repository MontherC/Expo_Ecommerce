import React, { Profiler } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Profile, Search, Cart } from '../screens'

import { SIZES, COLORS, SHADOWS } from '../constants/index';

import Ionicons from '@expo/vector-icons/Ionicons' 


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height: 70,
    }
}

const BottomTabNav = () => {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options ={{tabBarIcon:({focused})=>{
                    return(
                        <Ionicons name={focused ? "home" : "home-outline"}
                            size={SIZES.xLarge}
                            color={focused ? COLORS.secondary : COLORS.darkGray}
                        />
                    )
            }}}/>
            <Tab.Screen 
                name="Search" 
                component={Search}
                options ={{tabBarIcon:({focused})=>{
                    return (
                        <Ionicons name={"search-sharp"}
                            size={SIZES.xLarge}
                            color={focused ? COLORS.secondary : COLORS.darkGray}
                    />
                    )
            }}}/>
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options ={{tabBarIcon:({focused})=>{
                    return (
                        <Ionicons name={focused ? "person" : "person-outline"}
                            size={SIZES.xLarge}
                            color={focused ? COLORS.secondary : COLORS.darkGray}
                        />
                    )
            }}}/>   
            <Tab.Screen 
                name="Cart" 
                component={Cart}
                options ={{tabBarIcon:({focused})=>{
                    return( 
                        <Ionicons name={focused ? "cart" : "cart-outline"}
                            size={SIZES.xLarge}
                            color={focused ? COLORS.secondary : COLORS.darkGray}
                        />
                    )
            }}}/>
        </Tab.Navigator>
  )
}

export default BottomTabNav;