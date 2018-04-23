// @flow
import React from 'react';
import styled from 'styled-components/native';

const WalletCard = () => <Wrapper />;

const Wrapper = styled.View`
  width: 80%;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  margin: auto;
  box-shadow: 2px 2px 20px hsla(0, 0%, 0%, 0.6);
  elevation: 7px;
  position: absolute;
  top: 30%;
  left: 10%;
`;

export default WalletCard;
