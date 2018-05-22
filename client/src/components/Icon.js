import React from 'react';
import styled from 'styled-components/native';
import { images } from '../constants/styles';

const Icon = ({ name, size }) => (
  <ImageIcon size={size} source={images[name]} />
);

const ImageIcon = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export default Icon;
