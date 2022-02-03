import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { Container, SpinnerContainer } from "../../../components";
import SppinerLoading from "../../../components/SppinerLoading";
import ComplexCard from "../../../components/Card/productCard";
import { DeviderTitle } from "../../../components/DeviderTitle/deviderTitle";
import UpdatedContainer from "../../../components/UpdatedContainer";
import { getCategoryByName } from "../../../redux/Product/action";
import { TAllActionProduct } from "../../../redux/Product/type";
import { AppState } from "../../../redux/store";
import { CardsBox } from "./style";

const CategorayPage = () => {
  const { name } = useParams();

  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const categoryProduct = useSelector(
    (state: AppState) => state.product.categoryProductById
  );

  useEffect(() => {
    name && dispatch(getCategoryByName(name as string));
  }, [name, dispatch]);

  return categoryProduct.isLoading ? (
    <SppinerLoading />
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
          <DeviderTitle
            title={`${name as string} Products`}
            position="center"
          />
        </Container>
        <CardsBox>
          {categoryProduct?.product?.products?.map((product) => (
            <ComplexCard {...product} image={product.images[0] || ""} />
          ))}
        </CardsBox>
      </Container>
    </UpdatedContainer>
  );
};

export default CategorayPage;
