import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';


export default class App extends React.Component {

    showBar() {
        Alert.alert('bar');
        console.log('foo');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello ISIT 322!</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button title='foo'
                        onPress={this.showBar}
                />
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
