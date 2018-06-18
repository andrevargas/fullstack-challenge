import LinearGradient from 'react-native-linear-gradient';
import Card from './Card';
import { colors } from '@app/constants/styles';

const GradientCard = Card.withComponent(LinearGradient);

GradientCard.defaultProps = {
  colors: [colors.cornflowerblue.toString(), colors.blue.toString()],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
};

export default GradientCard;
