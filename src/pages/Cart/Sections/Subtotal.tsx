import React, { useMemo, useState } from 'react';
import { Button, Container, Divider, Typography } from '../../../components';
import { ICart } from '../../../redux/Auth/type';
import { IItemCart } from '../../../redux/User/type';

interface Props {
  data: ICart;
}

const Subtotal = ({ data }: Props) => {
  const allDiscount = useMemo(() => {
    return Math.round(
      data.totalPrice -
        data.items.reduce(
          (acc, { product }: IItemCart) => product.discount + acc,
          0,
        ),
    ).toFixed(2);
  }, [data.items, data.totalPrice]);

  return (
    <>
      <Container direction="column" align-items="center" padding="2em">
        <Typography
          variant="h2"
          fontSize="32px"
          letter-spacing="0.64px"
          margin-bottom="1em"
        >
          Subtotal ({data?.items.length}) items
        </Typography>

        <Typography
          variant="span"
          color="#707070"
          fontSize="24px"
          letter-spacing="0.48px"
          margin-bottom="0.5em"
          text-decoration="line-through"
        >
          {allDiscount}$
        </Typography>

        <Typography
          variant="h2"
          fontSize="38px"
          letter-spacing="0.76px"
          margin-bottom="1em"
        >
          {data?.totalPrice}
        </Typography>
      </Container>
      <Divider color="#E8E8E8" />
      <Button
        as="Link"
        to="/review"
        width="80%"
        style={{ margin: '2em auto', padding: '1em' }}
        background="#FCDD06"
      >
        Proceed to checkout
      </Button>
    </>
  );
};

export default Subtotal;
