import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/MyStyles';

export default class Tile extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }
    render() {
        console.log(this.buttonPress);
        return (
            <TouchableOpacity style={[styles.tile, {backgroundColor: this.props.col}]} onPress={() => this.buttonPress()}/>
        )
    }
    buttonPress() {
        if (this.props.good) {
            this.props.increment();
        }
        else {
            if (this.props.level == 2) {
                this.props.changeScreen("gameover");
            }
        }
    }
}