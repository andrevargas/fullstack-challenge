// @flow
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import GradientCard from '@components/GradientCard';
import { colors } from '@app/constants/styles';

const BalanceInfo = ({ query }) => (
  <View style={{ flex: 1 }}>
    <GradientCard style={{ margin: 20 }}>
      <Label>Balance (BRL)</Label>
      <Text>${query.dashboard.balance.toFixed(2)}</Text>
    </GradientCard>
    <GradientCard
      style={{ margin: 20, marginTop: 0 }}
      colors={[colors.persimmon, colors.coral]}>
      <Label>Balance (BRL)</Label>
      <Text>${query.dashboard.expenses.toFixed(2)}</Text>
    </GradientCard>
  </View>
);

const Label = styled.Text`
  font-size: 16px;
  text-align: left;
  letter-spacing: 1.09px;
  color: ${colors.white};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

const Text = styled.Text`
  font-size: 50px;
  text-align: left;
  letter-spacing: 1.09px;
  color: ${colors.white};
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
`;

export default BalanceInfo;
