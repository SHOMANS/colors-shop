/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React, { useState, CSSProperties } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { SliderItem } from './SliderItem';
import { Column } from '../Col';
import { InnerSection, Row } from '../Row';
import { Arrow, Dot, RowArrowWrapper, SliderSection } from './SliderStyle';
import { Container } from '..';

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '678px',
  margin: 'auto',
  backgroundColor: '#f2f2f2',
};

interface ProductItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface IProps {
  data: ProductItem[];
}
export const Slider = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  //   const handleChangeIndex = () => {};
  const handleLeft = () => {
    if (sliderIndex === 0) {
      setSliderIndex(2);
    } else setSliderIndex(sliderIndex - 1);
  };
  const handleRight = () => {
    if (sliderIndex === 2) {
      setSliderIndex(0);
    } else setSliderIndex(sliderIndex + 1);
  };

  const sliders =
    data.length &&
    data.map(item => (
      <SliderItem
        _id={item._id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
      />
    ));

  return (
    <Container direction="column" padding="0" background="#F2F2F2">
      <Container direction="column" width="90%" margin="auto" padding="0">
        <SliderSection>
          <SwipeableViews
            index={sliderIndex}
            style={cssStyle}
            enableMouseEvents
          >
            {sliders}
          </SwipeableViews>
        </SliderSection>
        <Container
          flexDirection="row"
          background="#F2F2F2"
          padding="1em"
          margin="auto"
        >
          <Arrow isLeft onClick={handleRight}>
            &#8250;
          </Arrow>
          {Array(3)
            .fill(0)
            .map((x, index) => (
              <Dot
                width="25px"
                isGrey={sliderIndex !== index}
                onClick={() => setSliderIndex(index)}
              />
            ))}
          <Arrow onClick={handleLeft}>&#8250;</Arrow>
        </Container>
      </Container>
    </Container>
  );
};