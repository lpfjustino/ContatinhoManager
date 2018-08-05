import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
    _onPress() {

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Keede Lycea</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
