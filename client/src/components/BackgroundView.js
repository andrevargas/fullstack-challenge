import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundView = ({ children }) => (
  <Wrapper>
    <Gradient colors={['#4AA2FB', '#7483f6']} end={{ x: 0, y: 0.9 }} />
    <WhiteSpace />
    {children}
  </Wrapper>
);

const { height, width } = Dimensions.get('window');

const Wrapper = styled.View`
  flex: 1;
`;

const Gradient = styled(LinearGradient)`
  position: absolute;
  z-index: -1;
  width: ${width};
  height: ${height / 2.5};
`;

const WhiteSpace = styled.View`
  position: absolute;
  z-index: -1;
  top: ${height / 2.5};
  width: ${width};
  height: ${height - height / 2.5};
  background-color: #f5f5f8;
`;

export default BackgroundView;
