import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import { SplashScreen, HomeScreen, LoginScreen } from "./screens";
const ReactNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: false
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerLeft: false
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            headerLeft: false
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