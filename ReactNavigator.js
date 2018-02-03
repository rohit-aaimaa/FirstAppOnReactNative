import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import { DrawerScreen } from "./navigators";
import { HomeScreen, LoginScreen, DashboardScreen, ProfileScreen } from './screens'

const ReactNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            path: '/',
            title: 'Home'
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            path: '/login',
            title: 'Login'
        }
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            path: '/dashboard',
            title: 'Dashboard'
        }
    },
    Drawer: {
        screen: DrawerScreen
    }
},
{
    initialRouteName: 'Home',
    // headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card' 
}
)

export default ReactNavigator