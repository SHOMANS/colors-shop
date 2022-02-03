import UpdatedContainer from "../UpdatedContainer";
import {
  PriceText,
  NameText,
  WrapperImageHero,
  DescriptionText,
  ButtonHero,
  ImageSlider,
  FlexColumn,
} from "./SliderStyle";

interface Props {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const SliderItem = ({ name, description, price, image, _id }: Props) => (
  <UpdatedContainer
    flexDirection={"row"}
    flexWrap={false}
    justifyContent={"space-between"}
    alignItems={"center"}
  >
    <>
      <FlexColumn>
        <PriceText variant="p"> Save up to ${price}</PriceText>
        <NameText>{name}</NameText>
        <DescriptionText> {description}</DescriptionText>
        <ButtonHero to={`/product/${_id}`}>Shop now</ButtonHero>
      </FlexColumn>
      <WrapperImageHero>
        <ImageSlider size="lg" src={image} variant="square" />
      </WrapperImageHero>
    </>
  </UpdatedContainer>
);
