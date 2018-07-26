import React from 'react';
import { Keyboard } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

export default class CustomTabBar extends React.PureComponent {
  state = { visible: true };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyBoardDidShow
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  handleKeyBoardDidShow = () => {
    this.setState({ visible: false });
  };

  handleKeyboardDidHide = () => {
    this.setState({ visible: true });
  };

  render() {
    return this.state.visible ? <BottomTabBar {...this.props} /> : null;
  }
}
