/* eslint-disable import/extensions */
import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { CategoryCard, Container } from "../..";
import { Divider, Title } from "../../DeviderTitle/style";
import { CategDots } from "../../Slider/SliderStyle";
import {
  FeaturedProduc,
  CatProduct,
  WrapperDots,
} from "../FeaturedProducts/styles";
import { IGetAllCategory, IProducts } from "../../../redux/Product/type";
import UpdatedContainer from "../../UpdatedContainer";

const cssStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const DotsStyles: CSSProperties = {
  color: "#707070",
  zIndex: 2,
  margin: "0 0.5rem",
};
interface IProps {
  data?: IGetAllCategory[];
}
export const FeaturedCategories = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const chunkSize =
    window.innerWidth > 1100 ? 4 : window.innerWidth > 1100 ? 3 : 1;
  const chunks: any = [];
  const getSlider = () => {
    data?.map((i: any, idx: number) => {
      if (idx % chunkSize === 0) {
        chunks.push([]);
      }

      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;

      chunks[firstArrayLength - 1][secondArrayLength] = i;

      return i;
    });
    return chunks.map((i: any, inx: number) => (
      <CatProduct key={inx}>
        {i.map((item, index) => (
          <CategoryCard
            name={item.name}
            image={item.image}
            key={index + item.name}
          />
        ))}
      </CatProduct>
    ));
  };

  return (
    <UpdatedContainer
      flexDirection={"column"}
      flexWrap={true}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <>
        <>
          <Title>Featured Categories</Title>
          <WrapperDots item="flex-start">
            {Array(3)
              .fill(0)
              .map((x, i) => (
                <CategDots
                  style={DotsStyles}
                  width="14px"
                  isGrey={sliderIndex !== i}
                  onClick={() => setSliderIndex(i)}
                />
              ))}
          </WrapperDots>{" "}
          <Divider width="12%" height="7px" color="#FCDD06" />
          <Divider width="100%" height="0px" color="#d3cdcd" />
        </>
        <>
          <SwipeableViews
            enableMouseEvents
            index={sliderIndex}
            style={cssStyle}
            onChangeIndex={setSliderIndex}
          >
            {getSlider()}
          </SwipeableViews>
        </>
      </>
    </UpdatedContainer>
  );
};
