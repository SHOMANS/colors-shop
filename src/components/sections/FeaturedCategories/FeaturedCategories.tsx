/* eslint-disable import/extensions */
import React, { useState, CSSProperties } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { CategoryCard, Container } from '../..';
import { Divider, Title } from '../../DeviderTitle/style';
import { CategDots } from '../../Slider/SliderStyle';
import { RowInnerSlider, WrapperDots } from '../FeaturedProducts/styles';
import { IProducts } from '../../../redux/Product/type';

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
};
interface IProps {
  data?: IProducts[];
}
export const FeaturedCategories = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);

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
      <RowInnerSlider key={inx}>
        {i.map(item => (
          <CategoryCard description={item.brand} img={item.images[0]} />
        ))}
      </RowInnerSlider>
    ));
  };

  return (
    <>
      <Container
        direction="column"
        width="100%"
        justify-content="center"
        align-items="center"
        margin-top="60px"
      >
        <Container direction="column" width="85.4%">
          <Title>Featured Categories</Title>
          <Divider width="12%" height="7px" color="#FCDD06" />
          <Divider width="100%" height="0px" color="#707070" />
        </Container>
        <Container direction="row" width="90%">
          <SwipeableViews
            enableMouseEvents
            index={sliderIndex}
            style={cssStyle}
          >
            {getSlider()}
          </SwipeableViews>
        </Container>
        <WrapperDots item="center">
          {Array(getSlider().length / 2)
            .fill(0)
            .map((x, i) => (
              <CategDots
                style={DotsStyles}
                width="14px"
                isGrey={sliderIndex !== i}
                onClick={() => setSliderIndex(i)}
              />
            ))}
        </WrapperDots>
      </Container>
    </>
  );
};

// <Container
// direction="column"
// background="white"
// width="90%"
// margin="60px auto"
// >
// <Container justifyContent="space-between">
//   <Container direction="column" width="auto">
//     <Title>Featured Categories</Title>
//     <Divider width="12%" height="7px" color="#FCDD06" />
//     <Divider width="88%" height="1px" color="#707070" />

//     <WrapperDots
//       item="center"
//       style={{
//         marginTop: '22px',
//       }}
//     >
//       {Array(getSlider().length)
//         .fill(0)
//         .map((x, i) => (
//           <CategDots
//             style={DotsStyles}
//             width="14px"
//             isGrey={sliderIndex !== i}
//             onClick={() => setSliderIndex(i)}
//           />
//         ))}
//     </WrapperDots>
//   </Container>
// </Container>
// <SwipeableViews enableMouseEvents index={sliderIndex} style={cssStyle}>
//   {getSlider()}
// </SwipeableViews>
// </Container>
