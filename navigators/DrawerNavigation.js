import React, { Component } from 'react'
import { DrawerNavigator } from "react-navigation";
import { View } from 'react-native'

import { SidebarScreen } from '../screens'
import { HomeScreen } from '../src/screens'

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