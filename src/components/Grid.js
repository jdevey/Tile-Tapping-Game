import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles/MyStyles';
import Tile from './Tile';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.currScore != nextProps.currScore;
    }
    render() {
        var ret = [];
        for (let i = 0; i < 40; ++i) {
            var c = 'blue';
            if (i) {
                if (this.props.level == 1) {
                    c = '#FFFFFF00'
                }
                else {
                    c = ['red', 'orange', 'yellow', 'green', 'purple'][Math.floor(Math.random() * 5)]
                }
            }
            ret.push(<Tile level={this.props.level} changeScreen={this.props.changeScreen}
                increment={this.props.increment} col={c} key={i} good={i ? false : true}/>);
        }
        this.shuffle(ret);
        return (
            <View style={[styles.grd, {justifyContent: 'center', alignItems: 'center', margin: 15}]}>{ret}</View>
        )
    }
    shuffle(arr) {
        for (let i = 0; i < arr.length; ++i) {
            var randInd = Math.floor(Math.random() * arr.length);
            [arr[i], arr[randInd]] = [arr[randInd], arr[i]];
        }
    }
}