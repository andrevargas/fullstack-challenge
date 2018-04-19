// @flow

import React, { Component } from 'react';
import BackgroundView from './src/components/BackgroundView';
import Button from './src/components/Button';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <BackgroundView>
        <Button />
      </BackgroundView>
    );
  }
}
