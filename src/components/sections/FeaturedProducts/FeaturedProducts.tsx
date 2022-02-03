/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { Featured, FeaturedProduc } from "./styles";
import ComplexCard from "../../Card/productCard";
import { Dot } from "../../Slider/SliderStyle";
import { DeviderTitle } from "../../DeviderTitle/deviderTitle";
import { IProducts } from "../../../redux/Product/type";
import UpdatedContainer from "../../UpdatedContainer";

const cssStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const DotsStyles: CSSProperties = {
  color: "#707070",
  zIndex: 2,
  margin: "1rem 0.5rem",
};

export interface IProduct {
  _id: string;
  image: string;
  price: number;
  name: string;
  rating: number;
  discount: number;
}
interface IProps {
  data?: IProducts[];
}
export const FeaturedProduct = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  // const [width, setWidth] = useState(window.innerWidth);
  // const handleSize = () => {
  //   setWidth(window.innerWidth);
  //   setSliderIndex(0);
  // };

  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1;
  const getSlider = () => {
    const chunks: any = [];

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
      <FeaturedProduc key={inx}>
        {i.map((item: IProducts) => (
          <ComplexCard key={item._id} {...item} image={item.images[0]} />
        ))}
      </FeaturedProduc>
    ));
  };

  return (
    <Featured>
      <UpdatedContainer
        flexDirection={"column"}
        flexWrap={true}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <DeviderTitle title="Featured Product" position="center" />

        <SwipeableViews
          enableMouseEvents
          index={sliderIndex}
          style={cssStyle}
          onChangeIndex={setSliderIndex}
        >
          {getSlider()}
        </SwipeableViews>
        <UpdatedContainer
          flexDirection={"row"}
          flexWrap={false}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {Array(getSlider().length)
            .fill(0)
            .map((x, i) => (
              <Dot
                style={DotsStyles}
                width="14px"
                isGrey={sliderIndex !== i}
                onClick={() => setSliderIndex(i)}
              />
            ))}
        </UpdatedContainer>
      </UpdatedContainer>
    </Featured>
  );
};
