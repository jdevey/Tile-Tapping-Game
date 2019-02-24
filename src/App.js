import React, {Component} from 'react';
import WelcomeComponent from './components/WelcomeComponent';
import Game from './components/Game';
import GameOver from './components/GameOver';
import Transition from './components/Transition';
import Victory from './components/Victory';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "welcome"
    }
    this.changeScreen = this.changeScreen.bind(this);
  }
  render() {
    switch(this.state.screen) {
      case "welcome":
        return (<WelcomeComponent changeScreen={this.changeScreen}/>);
      case "game1":
        return (<Game changeScreen={this.changeScreen} level={1}/>);
      case "transition":
        return (<Transition changeScreen={this.changeScreen} />);
      case "game2":
        return (<Game changeScreen={this.changeScreen} level={2}/>);
      case "gameover":
        return (<GameOver changeScreen={this.changeScreen} />);
      case "victory":
        return (<Victory changeScreen={this.changeScreen} />);
      default:
        return (<WelcomeComponent changeScreen={this.changeScreen}/>);
    }
  }
  changeScreen(id) {
    this.setState((prevState) => {
      return (
        {
          screen: id
        }
      )
    });
  }
}
