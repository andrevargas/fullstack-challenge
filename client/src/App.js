// @flow
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import RootNavigator from './RootNavigator';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}
