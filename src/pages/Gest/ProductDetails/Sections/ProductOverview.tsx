/* eslint-disable react/destructuring-assignment */
import React, { useCallback, useEffect, useState } from "react";
import { BsBookmarks } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import {
  Container,
  Button,
  Typography,
  Icon,
  Counter,
  GroupCircle,
} from "../../../../components";
import { upduteActionCart } from "../../../../redux/Cart/action";
import { ActionCartType } from "../../../../redux/Cart/type";
import { IProducts } from "../../../../redux/Product/type";
import { AppState } from "../../../../redux/store";
import { ProductImage, ImageSections, Imagefirst, Discount } from "./style";

const ProductOverview: React.FC<IProducts> = (props) => {
  const { id } = useParams<{ id: string }>();

  const { images, colors, _id } = props;
  const [colorActive, setColorActive] = useState(colors?.[0] || "");
  const [currentImages, setImages] = useState<string[]>(images || []);
  const [count, setCount] = useState<number>(1);

  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const handleAddToCart = useCallback(() => {
    dispatch(
      upduteActionCart(
        {
          productId: id as string,
          qty: count,
        },
        () => navigation("/cart")
      )
    );
  }, [dispatch, upduteActionCart, count]);

  const handleImageClick = (index: number) => {
    setImages([
      images[index],
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ]);
  };
  return (
    <Container
      align-Items="flex-start"
      // flex-Wrap="wrap"
      justify-ontent="space-between"
    >
      <ImageSections>
        <Imagefirst>
          <ProductImage size="md" src={currentImages?.[0]} />
        </Imagefirst>
        <Container direction="row" margin=".1em 0">
          {/* {currentImages?.map(
            (image, index) =>
              index > 0 && ( */}
          <ProductImage
            // key={index.toString()}
            src={currentImages?.[0]}
            //  onClick={() => handleImageClick(index)}
            border
            height="6em"
            width="5em"
          />
          {/* ) */}
          {/* )} */}
        </Container>
      </ImageSections>
      <Container direction="column">
        <Container justify-Content="space-between">
          <Typography variant="h3" font-Size="1.2rem" bold>
            {props?.name}
          </Typography>
          <div>
            {props.discount ? (
              <Discount>
                <Typography style={{ fontSize: "15px" }}>
                  <del> ${(props.price - props.discount).toFixed(2)}</del>
                </Typography>
                <Typography style={{ color: "red", fontSize: "15px" }}>
                  {Math.round((100 * props.discount) / props.price)}% Sale
                </Typography>
              </Discount>
            ) : (
              ""
            )}
            <Typography bold variant="h2" font-Size="1.3rem">
              {props?.price}$
            </Typography>
          </div>
        </Container>

        <Container margin="1em 0">
          <Counter
            max={props?.countInStock}
            min={1}
            onFinish={setCount}
            value={count}
          />
        </Container>
        <Container>
          <Typography variant="h3" color="grey">
            Color:
          </Typography>
          <Typography bold variant="h3" margin="1rem">
            {colorActive}
          </Typography>
        </Container>
        <GroupCircle
          colors={props?.colors || []}
          setColorActive={setColorActive}
        />

        <Container
          margin="1em 0 1em 0"
          justify-Content="space-between"
          align-Items="center"
        >
          <Container></Container>
          <Button width="3rem" margin="0 1em">
            <Icon size="20" icon={<BsBookmarks />} />
          </Button>
          <Button brand padding=".8em" width="15em" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Container>
        <Typography
          variant="p"
          line-Height={1.5}
          text-Align="justify"
          font-Size=".9rem"
        >
          {props?.description}
        </Typography>
      </Container>
    </Container>
  );
};

export default ProductOverview;
