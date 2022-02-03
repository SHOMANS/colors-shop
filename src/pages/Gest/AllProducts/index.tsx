import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Container, SpinnerContainer } from "../../../components";
import ComplexCard from "../../../components/Card/productCard";
import { DeviderTitle } from "../../../components/DeviderTitle/deviderTitle";
import UpdatedContainer from "../../../components/UpdatedContainer";
import { getProducts } from "../../../redux/Product/action";
import { TAllActionProduct } from "../../../redux/Product/type";
import { AppState } from "../../../redux/store";
import { CardsBox } from "./style";

const AllProducts = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();

  const allProduct = useSelector(
    (state: AppState) => state.product.allProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return allProduct.isLoading ? (
    <SpinnerContainer />
  ) : (
    <UpdatedContainer>
      <Container
        background="F7F8FC"
        direction="column"
        align-items="center"
        width="100%"
      >
        <Container
          direction="row"
          width="100%"
          marginBottom="30px"
          alignItems="flex-start"
        >
          <DeviderTitle title="All Products" position="center" />
        </Container>
        <CardsBox>
          {allProduct?.allProduct?.products?.map((product) => {
            return <ComplexCard {...product} image={product.images[0] || ""} />;
          })}
        </CardsBox>
      </Container>
    </UpdatedContainer>
  );
};

export default AllProducts;
