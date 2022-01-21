/* eslint-disable import/extensions */
import { Container } from '..';
import { Column } from '../Col';
import { Row } from '../Row';
import {
  PriceText,
  NameText,
  WrapperImageHero,
  DescriptionText,
  ButtonHero,
  ImageSlider,
} from './SliderStyle';

interface Props {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const SliderItem = ({ name, description, price, image, _id }: Props) => (
  <Container key={_id} justifyContent="space-between" background="#F2F2F2">
    <Column style={{ marginTop: '173px', maxWidth: '521px' }}>
      <PriceText variant="p"> Save up to ${price}</PriceText>
      <NameText>{name.substring(0, 15)}</NameText>
      <DescriptionText> {description.substring(0, 80)}</DescriptionText>
      <ButtonHero to={`/product/${_id}`}>Shop now</ButtonHero>
    </Column>
    <WrapperImageHero>
      <ImageSlider src={image} alt={name + _id} />
    </WrapperImageHero>
  </Container>
);