// @flow
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Button from '@components/Button';
import { colors } from '@app/constants/styles';

const BalanceInfo = ({ balance }) => (
  <Gradient
    end={{ x: 0, y: 0.8 }}
    colors={[colors.blue, colors.cornflowerblue]}>
    <Label>Balance (BRL)</Label>
    <Text>${balance}</Text>
    <SpacedButton title={'💲 NEW TRANSACTION'} />
  </Gradient>
);

const SpacedButton = styled(Button)`
  margin-top: 25px;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 18px;
  text-align: center;
  letter-spacing: 1.09px;
  color: ${colors.white};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

const Text = styled.Text`
  font-size: 50px;
  text-align: center;
  letter-spacing: 1.09px;
  color: ${colors.white};
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
`;

export default BalanceInfo;
