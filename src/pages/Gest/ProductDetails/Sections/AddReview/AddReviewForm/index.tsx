import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { addReview } from "../../../../../../redux/Product/action";
import {
  IReview,
  TAllActionProduct,
} from "../../../../../../redux/Product/type";
import { AppState } from "../../../../../../redux/store";
import {
  AddReviewSchema,
  IAddReview,
} from "../../../../../../utils/helper/validation";
import AddReviewForm from "./AddReviewForm";

const Index = ({
  setModalDisplay,
  rate,
  productId,
}: {
  setModalDisplay: (bool: boolean) => void;
  rate?: number;
  productId: string;
}) => {
  const dispatch =
    useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();

  const initialValues: IAddReview = {
    comment: "",
    rating: 0,
  };
  const { auth } = useSelector((state: AppState) => state);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(auth.user.firstName);
        const review: any = {
          ...values,
          name: `${auth.user.firstName} ${auth.user.lastName}`,
          createdAt: new Date().toString(),
       
        };
        dispatch(addReview(productId, review));
        setModalDisplay(false);
      }}
      validationSchema={AddReviewSchema}
      children={(formikProps) => (
        <AddReviewForm {...formikProps} setModalDisplay={setModalDisplay} />
      )}
    />
  );
};

export default Index;
