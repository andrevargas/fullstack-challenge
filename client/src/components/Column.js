import styled from 'styled-components/native';

const Column = styled.View`
  flex: ${props => props.flex};
  flex-direction: column;
  justify-content: center;
`;

Column.defaultProps = {
  flex: 1,
};

export default Column;
