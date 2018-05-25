// @flow
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import RootNavigator from './RootNavigator';
import Container from './components/Container';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

export default class App extends Component {
  render() {
    return (
      <Container>
        <RootNavigator />
      </Container>
    );
  }
}
