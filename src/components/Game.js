import React, {Component} from 'react';
import styles from '../styles/MyStyles';
import {Text, View} from 'react-native';
import Grid from './Grid';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            seconds: 10
        }
        this.increment = this.increment.bind(this);
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 25,}}>
                    <Text style={styles.scoreboard}>Score: {this.state.score}</Text>
                    <Text style={styles.scoreboard}>Time: {this.state.seconds}</Text>
                </View>
                <Grid level={this.props.level} changeScreen={this.props.changeScreen} increment={this.increment} currScore={this.state.score}/>
            </View>
        )
    }
    tick () {
        this.setState((prevState) => {
            return (
                {
                    seconds: this.state.seconds - 1
                }
            )
        });
        if (this.state.seconds == 0) {
            if (this.props.level == 1) {
                if (this.state.score >= 10) {
                    this.props.changeScreen("transition");
                }
                else {
                    this.props.changeScreen("gameover");
                }
            }
            else {
                if (this.state.score >= 10) {
                    this.props.changeScreen("victory");
                }
                else {
                    this.props.changeScreen("gameover");
                }
            }
        }
    }
    increment() {
        this.setState((prevState) => {
            return (
                {
                    score: this.state.score + 1
                }
            )
        });
    }
}
