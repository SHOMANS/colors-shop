/* eslint-disable no-underscore-dangle */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { DeviderTitle } from "../../DeviderTitle/deviderTitle";
import { RowWithRadius } from "./style";
import { TAllActionProduct } from "../../../redux/Product/type";
import ComplexCard from "../../Card/productCard";
import { getTopProducts } from "../../../redux/Product/action";
import { AppState } from "../../../redux/store";
import SppinerLoading from "../../SppinerLoading/index";
import UpdatedContainer from "../../UpdatedContainer";

interface Props {
  title?: string;
}

export const TopRate = ({ title = "TOP RATE PRODUCTS" }: Props) => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const topProducts = useSelector(
    (state: AppState) => state.product.topProducts
  );

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);
  return (
    <UpdatedContainer
      flexDirection={"column"}
      flexWrap={false}
      justifyContent={"flex-end"}
      alignItems={"flex-end"}
    >
      <DeviderTitle position="start" title={title} />
      {topProducts.isLoading ? (
        <SppinerLoading />
      ) : (
        <RowWithRadius direction="row">
          {topProducts.product?.map((item, i) => (
            <ComplexCard key={"fasd" + i} image={item.images[0]} {...item} />
          ))}
        </RowWithRadius>
      )}
    </UpdatedContainer>
  );
};
