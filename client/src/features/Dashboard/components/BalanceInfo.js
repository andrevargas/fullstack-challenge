// @flow
import React from 'react';
import styled from 'styled-components/native';
import Container from '@components/Container';
import GradientCard from '@components/GradientCard';
import { colors } from '@app/constants/styles';

const BalanceInfo = ({ query }) => (
  <Container>
    <GradientCard style={{ margin: 20 }}>
      <Label>Balance (BRL)</Label>
      <ValueWrapper>
        <SubText>$</SubText>
        <Text>{query.dashboard.balance.toFixed(2)}</Text>
      </ValueWrapper>
    </GradientCard>
  </Container>
);

const Label = styled.Text`
  font-size: 16px;
  text-align: left;
  letter-spacing: 1.09px;
  color: ${colors.white.toString()};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

const ValueWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 50px;
  text-align: left;
  letter-spacing: 1.09px;
  color: ${colors.white.toString()};
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
`;

const SubText = Text.extend`
  font-size: 25px;
  margin-top: 20px;
`;

export default BalanceInfo;
