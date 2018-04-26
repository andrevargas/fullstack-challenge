// @flow
import React from 'react';
import styled from 'styled-components/native';
import Column from './Column';

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
  padding-vertical: 10px;
  padding-horizontal: 20px;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Subtitle = styled.Text`
  font-size: 12px;
`;

export default ListItem;
