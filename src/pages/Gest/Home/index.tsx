import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import SppinerLoading from "../../../components/SppinerLoading/index";
import { FeaturedCategories } from "../../../components/sections/FeaturedCategories/FeaturedCategories";
import { FeaturedProduct } from "../../../components/sections/FeaturedProducts/FeaturedProducts";
import { TopRate } from "../../../components/sections/TopRate/TopRate";
import { Slider } from "../../../components/Slider/slider";
import {
  getAlCategory,
  getProducts,
  getTopProducts,
} from "../../../redux/Product/action";
import { TAllActionProduct } from "../../../redux/Product/type";
import { AppState } from "../../../redux/store";

const Home: React.FC = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();
  const topProducts = useSelector(
    (state: AppState) => state.product.topProducts
  );
  const allCatogory = useSelector(
    (state: AppState) => state.product.allCategory
  );
  const featcheProduct = useSelector(
    (state: AppState) => state.product.allProducts
  );

  useEffect(() => {
    dispatch(getTopProducts());
    dispatch(getAlCategory());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {topProducts.isLoading ? (
        <SppinerLoading />
      ) : (
        <Slider data={topProducts.product} />
      )}
      {allCatogory.isLoading || !allCatogory.categories ? (
        <SppinerLoading />
      ) : (
        <FeaturedCategories data={allCatogory?.categories} />
      )}
      {topProducts.isLoading || !featcheProduct.allProduct ? (
        <SppinerLoading />
      ) : (
        <FeaturedProduct data={featcheProduct.allProduct.products} />
      )}
      <TopRate />
    </>
  );
};

export default Home;
