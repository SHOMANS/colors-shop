import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/ButtonStyle";
import Typography from "../Typography";
import {
  Content,
  ContentAction,
  Discount,
  FlexButton,
  StyleMainCard,
} from "./cardStyles";
import { Image } from "..";
import { AppState } from "../../redux/store";
import { ActionCartType } from "../../redux/Cart/type";
import { upduteActionCart } from "../../redux/Cart/action";

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount: number;
  countInStock?: number;
  _id: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const navigate = useNavigate();

  const handelAddCart = () => {
    dispatch(
      upduteActionCart({ productId: props._id, qty: 1 }, () => {
        navigate("/cart");
      })
    );
  };
  return (
    <StyleMainCard>
      {props?.discount > 0 && (
        <Discount>{Math.round((100 * props.discount) / props.price)}%</Discount>
      )}
      <ContentAction onClick={() => navigate(`/product/${props._id}`)}>
        <Image
          width="100%"
          height="300px"
          src={props.image}
          size="lg"
          style={{
            flexShrink: 0,
          }}
        />
      </ContentAction>
      <Content
        onClick={() => navigate(`/product/${props._id}`)}
        style={{ textAlign: "center" }}
      >
        <Typography font-family="mulish">{props.name}</Typography>
      </Content>
      <Content>
        <ReactStars
          isHalf
          name="rate"
          edit={false}
          value={props.rating}
          flex-wrap="wrap"
          size={30}
        />
      </Content>
      <Content>
        <Typography variant="h2" fontFamily="mulish">
          {props.discount ? (
            <>
              <span style={{ color: "red" }}>
                ${(props.price - props.discount).toFixed(2)}
              </span>{" "}
              <del>${props.price.toFixed(2)}</del>
            </>
          ) : (
            <span> ${props.price.toFixed(2)}</span>
          )}
        </Typography>
      </Content>

      <FlexButton>
        {/* <Button
          height="62px"
          background="#F2F2F2"
          width="25%"
          padding="none"
          margin-left="0 6%"
        >
          <BsBookmark size="24px" />
        </Button> */}
        <Button
          width="65.3%"
          fontSize="15px"
          margin="0 5%"
          onClick={handelAddCart}
        >
          Add to cart
        </Button>
      </FlexButton>
    </StyleMainCard>
  );
};

export default ComplexCard;
