import React, { useCallback, useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer, ListContainer, TotalContainer } from './styles';
import EmptyCart from './Sections/EmptyCart';
import { Container, PathNavigate, SpinnerContainer } from '../../components';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
import { AppState } from '../../redux/store';
import { TopRate } from '../../components/sections/TopRate/TopRate';
import { myActionCart } from '../../redux/Cart/action';

const Cart = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, any>>();
  const cart = useSelector((state: AppState) => state.cart);

  useEffect(() => {
    dispatch(myActionCart());
    // dispatch(getTopProducts());
  }, []);

  const TopRateComp = useCallback(() => <TopRate />, []);
  return (
    <Container direction="column" width="90%" margin="80px auto">
      <PathNavigate name="Shopping Cart" />
      {cart.isLoading ? (
        <SpinnerContainer />
      ) : !cart.cart?.items.length ? (
        <EmptyCart />
      ) : (
        <CartContainer align-items="flex-start">
          <ListContainer direction="column" width="70%">
            {cart.cart?.items.map(item => (
              <CartList data={item} key={item.product._id} />
            ))}
          </ListContainer>
          <TotalContainer
            direction="column"
            background-color="#F2F2F2"
            border-radius="16px"
            margin-left="2em"
            height="50%"
          >
            <Subtotal data={cart.cart} />
          </TotalContainer>
        </CartContainer>
      )}
      {TopRateComp()}
    </Container>
  );
};

export default Cart;
