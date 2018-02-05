import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import { DrawerScreen } from "./navigators";
import { 
    LoginScreen, 
    DashboardScreen, 
    ProfileScreen,
    NeedHelpScreen, 
    ShareScreen,
    RateUsScreen,
    AboutUsScreen,
    AboutThisReleaseScreen } from './screens'

const ReactNavigator = StackNavigator({
    Drawer: {
        screen: DrawerScreen
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            title: 'Dashboard'
        }
    },
    NeedHelp: {
        screen: NeedHelpScreen,
        navigationOptions: {
            title: 'Neep Help'
        }
    },
    Share: {
        screen: ShareScreen,
        navigationOptions: {
            title: 'Share'
        }
    },
    RateUs: {
        screen: RateUsScreen,
        navigationOptions: {
            title: 'Rate Us'
        }
    },
    AboutUs: {
        screen: AboutUsScreen,
        navigationOptions: {
            title: 'About Us'
        }
    },
    AboutThisRelease: {
        screen: AboutThisReleaseScreen,
        navigationOptions: {
            title: 'About this release'
        }
    }
},
{
    initialRouteName: 'Drawer' 
}
)

export default ReactNavigator