import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Link } from "react-router-dom";
import { Container, SpinnerContainer, Typography } from "../../components";
import SppinerLoading from "../../components/SppinerLoading";
import Table from "./Table";
import { Btn, DashContainer } from "./style";
import { AppState } from "../../redux/store";
import { TAllActionProduct } from "../../redux/Product/type";
import { getProducts } from "../../redux/Product/action";

const DashBoard = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();

  const allProduct = useSelector(
    (state: AppState) => state.product.allProducts
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Container
        direction="row"
        justify-content="space-between"
        width="89%"
        margin="80px auto 0 auto"
      >
        <Typography variant="h2" font-size="32px">
          Products
        </Typography>
        <Btn>
          <Link
            to="/addproduct"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <Typography style={{ color: "#242424" }} font-size="20px">
              New Product
            </Typography>
          </Link>
        </Btn>
      </Container>
      <DashContainer direction="column">
        {allProduct.isLoading ? (
          <SppinerLoading />
        ) : (
          <Table data={allProduct.allProduct?.products} />
        )}
      </DashContainer>
    </>
  );
};

export default DashBoard;
