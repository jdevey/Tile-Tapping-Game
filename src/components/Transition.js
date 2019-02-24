import React, {Component} from 'react';
import styles from '../styles/MyStyles';
import {Text, View, TouchableOpacity} from 'react-native';

export default class WelcomeComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}> Continue to level 2 </Text>
                <TouchableOpacity
                    style={[styles.button, {width: 100, height: 50}]}
                    onPress={() => this.props.changeScreen("game2")}
                >
                    <Text> Play </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
