import React, { Component } from 'react'
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Button, View, SafeAreaView, Modal } from "react-native";

import { ProfileScreen } from '../screens'

class ModalClass extends Component {
    state={
        modalVisible: false
    }

    componentWillMount() {
        this.setState({modalVisible: this.props.visible})
    }

    onClose = () => {
        this.setState({modalVisible: false})
    }

    render() {
        return (
            <Modal
                onRequestClose={this.onClose}
                visible={this.state.modalVisible}
            >
            </Modal>
        )
    }
}
 
const DrawerNavigation = DrawerNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile'
        }
    }
},
{
    contentComponent: (props) => (
        <View style={{flex:1}}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
                <Button title="Logout" onPress={() => (<ModalClass visible={true} />)} />
            </SafeAreaView>
        </View>
    ) 
}

)

export default DrawerNavigation