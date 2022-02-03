import { useCallback, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Counter, Image, Typography } from "../../../components";
import { deleteActionCart, upduteActionCart } from "../../../redux/Cart/action";
import { ActionCartType } from "../../../redux/Cart/type";
import { AppState } from "../../../redux/store";
import { IItemCart } from "../../../redux/User/type";
import {
  CloseIcon,
  OldPrice,
  ItemTitle,
  ItemContainer,
  ImgContainer,
} from "../styles";

interface IProps {
  data: IItemCart;
}

/**
 * 
 *    const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const handleAddToCart = useCallback(() => {
    dispatch(
      upduteActionCart(
        {
          productId: id as string,
          qty: count,
        },
        () => navigation('/cart'),
      ),
    );
    console.log('count', count);
  }, [dispatch, upduteActionCart, count]);
 *  
 */
const CartList = ({ data }: IProps) => {
  const { product, qty } = data;
  const [count, setCount] = useState<number>(qty);
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  // const handleRemoveFormCart = (id: string) => {
  // };

  const removeFromCart = useCallback(() => {
    dispatch(deleteActionCart(product._id));
    // dispatch(upduteActionCart({ productId: product._id, qty: 0 }));
    setCount(0);
  }, [dispatch, product._id]);

  const handleIncress = useCallback(() => {
    dispatch(upduteActionCart({ productId: product._id, qty: count + 1 }));
    setCount((prev) => prev + 1);
  }, [count, dispatch, product._id]);

  const handleDecress = useCallback(() => {
    dispatch(upduteActionCart({ productId: product._id, qty: count - 1 }));
    setCount((prev) => prev - 1);
  }, [count, dispatch, product._id]);

  return (
    <ItemContainer
    // background-color="#F2F2F2"
    // height="180px"
    // border-radius="16px"
    // position="relative"
    // padding="1em"
    // margin-bottom="30px"
    // justify-content="space-evenly"
    // display={count.toString()}
    >
      <CloseIcon onClick={removeFromCart}>
        <GrFormClose />
      </CloseIcon>
      {product.discount ? (
        <OldPrice>
          <Typography
            variant="span"
            color="#707070"
            fontSize="15px"
            margin="20px"
            text-decoration="line-through"
          >
            {product.price}
          </Typography>
        </OldPrice>
      ) : null}
      <ImgContainer align-items="start" justify-content="space-between">
        <Image src={product.images[0]} fit="cover" />
      </ImgContainer>
      <ItemTitle to={`/product/${product._id}`}>
        <Typography
          children={product.name}
          variant="h2"
          // margin-left="0.5em"
          // padding="0.5em"
          overflow-wrap="break-word"
        />
      </ItemTitle>
      {/* <WrapCounter> */}
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          gap: "4rem",
        }}
      >
        <Counter
          max={product?.countInStock}
          min={1}
          onFinish={setCount}
          value={count}
          handleIncrease={handleIncress}
          handleDecrease={handleDecress}
        />
        {/* </WrapCounter> */}
        <Typography
          children={String(` $${product.price - product.discount}`)}
          variant="h2"
          fontSize="38px"
          // width="auto"
          text-align="right"
          width="30%"
        />
      </div>
    </ItemContainer>
  );
};

export default CartList;
