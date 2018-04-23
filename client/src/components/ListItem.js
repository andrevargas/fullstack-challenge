import React from 'react';
import styled from 'styled-components/native';

const ListItem = ({ title, detail }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Detail>{detail}</Detail>
  </Wrapper>
);

const Wrapper = styled.View`
  padding: 15px;
  flex-direction: row;
`;

const Title = styled.Text``;

const Detail = styled.Text``;

export default ListItem;
