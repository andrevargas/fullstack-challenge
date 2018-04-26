import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ListItem from './ListItem';
import { colors } from '@app/constants/styles';

const List = props => (
  <FlatList {...props} ItemSeparatorComponent={Separator} />
);

List.Item = ListItem;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.fog};
`;

export default List;
