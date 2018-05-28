// @flow
import React from 'react';
import styled from 'styled-components/native';
import Column from './Column';
import { colors } from '@app/constants/styles';

import type { Element } from 'react';

type Props = {
  title: string,
  subtitle: string,
  renderRight?: () => Element,
};

const ListItem = ({ title, subtitle, renderRight }: Props) => (
  <Wrapper>
    <Column>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Column>
    <Column>{renderRight()}</Column>
  </Wrapper>
);

const Wrapper = styled.View`
  padding-vertical: 15px;
  padding-horizontal: 20px;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.boulder};
`;

const Subtitle = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
`;

export default ListItem;
