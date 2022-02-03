// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FooterTitleRight,
  TextFooter,
  UserName,
  Address,
  RevieworderButton,
  ChangeText,
  HeaderTitleRight,
  ShapeAddress,
  RightSectionPlace,
  OrderDetailsText,
  LeftOrderSection,
  ProductContainer,
} from "./style";
import { OrderDetails } from "./orderDtails";
import { Column } from "../../../../components/Row";
// @ts-ignore
import { AppState } from "../../../../redux/store";
import { ActionOrderType } from "../../../../redux/Order/type";
import { getOrderById } from "../../../../redux/Order/action";
import SppinerLoading from "../../../../components/SppinerLoading";
import { myActionCart } from "../../../../redux/Cart/action";

export const ReviewTow: React.FC<objectType> = ({
  paymentId,
  clientSec,
  orderId,
}) => {
  const navigation = useNavigate();
  const stripe: any = useStripe();
  const pay = async () => {
    try {
      const { error } = await stripe.confirmCardPayment(clientSec, {
        payment_method: paymentId,
      });
      if (error) throw new Error(error.message);
      toast("Payment Successful", {
        type: "success",
      });
      navigation(`/paymentSuccess`);
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionOrderType>>();
  const getOrder = useSelector((state: AppState) => state.order.orderById);
  useEffect(() => {
    dispatch(myActionCart());
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);
  return (
    <>
      {getOrder?.isLoading && !getOrder.orders ? (
        <SppinerLoading />
      ) : (
        <div style={{ display: "flex", width: "100%", marginTop: "16px" }}>
          <LeftOrderSection>
            <Column>
              <ShapeAddress>Shipping Address</ShapeAddress>
              <UserName>{getOrder.orders?.user?.firstName}</UserName>
              <Address>
                {getOrder?.orders?.shippingAddress?.address},
                {getOrder?.orders?.shippingAddress?.city},
                {getOrder?.orders?.shippingAddress?.country},
              </Address>
              <HeaderTitleRight style={{ marginTop: "32px" }}>
                <ShapeAddress style={{ marginTop: "5px" }}>
                  Order Details
                </ShapeAddress>
                <ChangeText to="/change">change</ChangeText>
              </HeaderTitleRight>
              <Column style={{ width: "100%" }}>
                <ProductContainer>
                  {getOrder.isLoading ? (
                    <SppinerLoading />
                  ) : (
                    <>
                      {getOrder.orders?.orderItems?.map((x) => (
                        <OrderDetails
                          title={x.product?.name}
                          image={x.product?.images[0]}
                          priceItem={x.product.price}
                          countItem={x.qty}
                          isHr
                        />
                      ))}
                    </>
                  )}
                </ProductContainer>
              </Column>
            </Column>
          </LeftOrderSection>
          <RightSectionPlace>
            <Column>
              <OrderDetailsText>Order Details</OrderDetailsText>
              <FooterTitleRight>
                <TextFooter>Subtotal</TextFooter>
                <TextFooter>
                  {getOrder.orders?.orderItems
                    ?.reduce(
                      (acc, item) => acc + item?.product?.price * item?.qty,
                      0
                    )
                    .toFixed(2)}
                  $
                </TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Tax</TextFooter>
                <TextFooter> {getOrder?.orders?.taxPrice} $</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter>Shipping</TextFooter>
                <TextFooter>0 $</TextFooter>
              </FooterTitleRight>
              <FooterTitleRight>
                <TextFooter style={{ fontWeight: "bold" }}>Total</TextFooter>
                <TextFooter style={{ fontWeight: "bold" }}>
                  {getOrder?.orders?.totalPrice}
                </TextFooter>
              </FooterTitleRight>
            </Column>
            <RevieworderButton onClick={pay}>Review order</RevieworderButton>
          </RightSectionPlace>
        </div>
      )}
    </>
  );
};

export default ReviewTow;
