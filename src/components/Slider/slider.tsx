/* eslint-disable no-underscore-dangle */
import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { SliderItem } from "./SliderItem";
import { Arrow, Dot, SliderSection, FlexCenter, SwiperWrapper } from "./SliderStyle";
import { Container } from "..";

import { IProducts } from "../../redux/Product/type";

const cssStyle: CSSProperties = {
  position: "relative",
  width: "100%",
};

interface ProductItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface IProps {
  data?: IProducts[];
}
export const Slider = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
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
    data &&
    data.length &&
    data.map((item) => (
      <SliderItem
        key={"wh" + item._id}
        _id={item._id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.images[0]}
      />
    ));

  return (
    <SwiperWrapper>
      <SliderSection>
        <SwipeableViews
          index={sliderIndex}
          style={cssStyle}
          enableMouseEvents
          onChangeIndex={setSliderIndex}
        >
          {sliders}
        </SwipeableViews>
      </SliderSection>
      <FlexCenter>
        <Arrow onClick={handleLeft}>&#x3c;</Arrow>
        {Array(3)
          .fill(0)
          .map((x, index) => (
            <Dot
              key={"Slider" + index}
              width="14px"
              isGrey={sliderIndex !== index}
              onClick={() => setSliderIndex(index)}
            />
          ))}
        <Arrow onClick={handleRight}>&#x3e;</Arrow>
      </FlexCenter>
    </SwiperWrapper>
  );
};
