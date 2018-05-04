import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { colors } from '@app/constants/styles';

const Button = ({ children, onPress, transparent, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    accessibilityComponentType="button">
    {transparent ? (
      <TransparentBackground style={style}>
        <Text>{children}</Text>
      </TransparentBackground>
    ) : (
      <GradientBackground
        style={style}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[colors.blue, colors.cornflowerblue]}>
        <Text>{children}</Text>
      </GradientBackground>
    )}
  </TouchableOpacity>
);

const Background = styled.View`
  border-radius: 50px;
`;

const GradientBackground = Background.withComponent(LinearGradient).extend`
  border: 1px solid rgba(0, 0, 0, 0);
`;

const TransparentBackground = Background.extend`
  border: 1px solid ${colors.white};
`;

const Text = styled.Text`
  color: ${colors.white};
  padding: 10px 20px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1.09px;
`;

export default Button;
