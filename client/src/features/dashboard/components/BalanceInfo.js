// @flow
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const BalanceInfo = ({ balance }) => (
  <Gradient colors={['#21b6fe', '#7483f7']} end={{ x: 0, y: 0.8 }}>
    <Label>Balance (BRL)</Label>
    <Text>${balance}</Text>
  </Gradient>
);

const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 40%;
`;

const Label = styled.Text`
  font-size: 18px;
  text-align: center;
  letter-spacing: 1.09px;
  color: hsl(0, 0%, 100%);
  text-shadow: 1px 1px 10px hsla(0, 0%, 0%, 0.2);
  margin-top: 15%;
`;

const Text = styled.Text`
  font-size: 50px;
  text-align: center;
  letter-spacing: 1.09px;
  color: hsl(0, 0%, 100%);
  text-shadow: 1px 1px 20px hsla(0, 0%, 0%, 0.2);
`;

export default BalanceInfo;
