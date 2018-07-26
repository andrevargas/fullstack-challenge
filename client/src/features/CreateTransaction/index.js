// @flow
import React from 'react';
import ScrollContainer from '@components/ScrollContainer';
import Header from '@components/Header';
import TextInput from '@components/TextInput';

const CreateTransaction = () => (
  <ScrollContainer>
    <Header />
    <TextInput label="Value" placeholder="Value" type="numeric" />
  </ScrollContainer>
);

export default CreateTransaction;
