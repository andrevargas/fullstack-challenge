import React from 'react';
import styled from 'styled-components/native';
import { colors } from '@app/constants/styles';

type Props = {
  value?: string,
  placeholder?: string,
  label?: string,
  type?: string,
};

type State = {
  focused: boolean,
};

class TextInput extends React.Component<Props, State> {
  state = { focused: false };

  toggleFocus = () => {
    this.setState({ focused: !this.state.focused });
  };

  render() {
    const { label, value, placeholder, type } = this.props;
    const { focused } = this.state;
    return (
      <Wrapper>
        <Label>{label}</Label>
        <Input
          value={value}
          focused={focused}
          onBlur={this.toggleFocus}
          onFocus={this.toggleFocus}
          placeholder={placeholder}
          keyboardType={type}
          underlineColorAndroid="transparent"
          selectionColor={colors.boulder}
          placeholderTextColor={colors.silver}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: ${colors.silver.darken(0.3).toString()}
  font-size: 16px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  padding-vertical: 5px;
  padding-horizontal: 0;
  border-bottom-color: ${props =>
    props.focused
      ? colors.blue.darken(0.1).toString()
      : colors.silver.toString()};
  border-style: solid;
  border-bottom-width: 1px;
`;

export default TextInput;
