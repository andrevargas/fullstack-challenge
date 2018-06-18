// @flow
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import TextInput from '@components/TextInput';

const CreateTransaction = () => (
  <Container>
    <Header />
    <TextInput label="Value" placeholder="Value" type="numeric" />
  </Container>
);

export default CreateTransaction;
