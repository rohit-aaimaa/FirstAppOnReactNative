import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import { HomeScreen, LoginScreen, DashboardScreen } from "./screens";
const ReactNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
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
    }
}
// {
//     initialRouteName: 'Home',
//     headerMode: 'none',
//     mode: Platform.OS === 'ios' ? 'modal' : 'card' 
// }
)

export default ReactNavigator