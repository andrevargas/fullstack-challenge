import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    accessibilityComponentType="button">
    <Background style={style}>
      <Text>{title}</Text>
    </Background>
  </TouchableOpacity>
);

const Background = styled.View`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50px;
`;

const Text = styled.Text`
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1.09px;
`;

export default Button;
