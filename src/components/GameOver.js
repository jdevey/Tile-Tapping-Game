import React, {Component} from 'react';
import styles from '../styles/MyStyles';
import {Text, View, TouchableOpacity} from 'react-native';

export default class GameOver extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}> Game over! </Text>
                <TouchableOpacity
                    style={[styles.button, {width: 240, height: 50}]}
                    onPress={() => this.props.changeScreen("welcome")}
                >
                    <Text> Return home </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
