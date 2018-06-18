import React from 'react';
import styled from 'styled-components/native';
import { colors } from '@app/constants/styles';

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.View`
  height: 56px;
  background-color: ${colors.white.toString()};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  color: ${colors.boulder.toString()};
  text-align: center;
`;

export default Header;
