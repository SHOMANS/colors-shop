import { useSelector } from "react-redux";
import { Container, Typography } from "../../../components";
import { AppState } from "../../../redux/store";
import { ButtonKeep } from "./style";

// interface IDetailProps {
//   orderNumber?: string;
//   shippingAddress?: string;
//   orderItem?: string;
// }

const Detail = () => {
  const getOrder = useSelector((state: AppState) => state.order.orderById);
  return (
    <>
      <Container
        direction="row"
        background-color="#F2F2F2"
        height="372px"
        border-radius="16px"
        width="85.4%"
        margin="44px auto"
      >
        <Container
          direction="column"
          margin-top="20px"
          justify-content="space-between"
          padding="40px"
        >
          <Typography
            variant="h1"
            bold
            margin-bottom="30px"
            fontFamily="mulish"
          >
            Payment Success !
          </Typography>
          <Typography variant="p" bold fontFamily="mulish">
            Shipping Adress
          </Typography>
          <Typography variant="p" bold fontFamily="mulish">
            {getOrder?.orders?.shippingAddress?.address}
          </Typography>
          <Typography variant="h3" bold fontFamily="mulish">
            order number
          </Typography>
          <Typography variant="p" bold fontFamily="mulish">
            {getOrder?.orders?.orderItems?.map((item) => (
              <div>{item?.product?._id}</div>
            ))}
          </Typography>
          <Typography
            variant="p"
            width="50%"
            margin-bottom="31px"
            fontFamily="mulish"
          >
            An email will be sent to your email address contains order
            confirmation and tracking code
          </Typography>
        </Container>
        <Container
          direction="column"
          justify-content="space-between"
          height="115px"
          margin-top="65px"
        ></Container>
        <Container padding="1em .5em">
          <ButtonKeep to="/">
            {/* <Typography font-size="20px" fontFamily="mulish"> */}
            Keep Shopping
            {/* </Typography> */}
          </ButtonKeep>
        </Container>
      </Container>
    </>
  );
};

export default Detail;
