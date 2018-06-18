import styled from 'styled-components/native';
import { colors } from '@app/constants/styles';

const Card = styled.View`
  padding: 15px;
  background-color: ${colors.white.toString()};
  elevation: 3;
  border-radius: 7px;
`;

export default Card;
