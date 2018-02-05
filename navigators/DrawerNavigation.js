import React, { Component } from 'react'
import { DrawerNavigator } from "react-navigation";
import { View } from 'react-native'

import { 
    HomeScreen,
    SidebarScreen } from '../screens'

const DrawerNavigation = DrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    }
},
{
    contentComponent: SidebarScreen,
    drawerWidth: 200
}

)

export default DrawerNavigation