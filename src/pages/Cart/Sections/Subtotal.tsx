import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Typography } from "../../../components";
import ButtonComponent from "../../../components/Button";
import { ICart } from "../../../redux/Auth/type";
import { IItemCart } from "../../../redux/User/type";

interface Props {
  data: ICart;
}

const Subtotal = ({ data }: Props) => {
  const allDiscount = useMemo(() => {
    return Math.round(
      data.totalPrice -
        data.items.reduce(
          (acc, { product }: IItemCart) => product.discount + acc,
          0
        )
    ).toFixed(2);
  }, [data.items, data.totalPrice]);

  return (
    <>
      <Typography variant="h2" fontSize=".8rem">
        Subtotal({data?.items.length})items
      </Typography>
      <Typography
        variant="span"
        color="#707070"
        fontSize="24px"
        letter-spacing="0.48px"
        // margin-bottom="0.5em"
        text-decoration="line-through"
      >
        {data.totalPrice}$
      </Typography>
      <Typography
        variant="h2"
        // fontSize="38px"
        letter-spacing="0.76px"
        // margin-bottom="1em"
      >
        {allDiscount}$
      </Typography>
      {/* </Container> */}
      {/* <Divider  width="100%" /> */}
      <Button
        as={Link}
        brand
        fontSize=".8rem"
        to="/review"
        padding="1em"
        margin="15px 0px 0px 0px"
      >
        Proceed to checkout
      </Button>
    </>
  );
};

export default Subtotal;
