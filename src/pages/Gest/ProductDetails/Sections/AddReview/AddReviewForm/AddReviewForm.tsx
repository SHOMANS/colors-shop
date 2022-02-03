import { Form, FormikProps } from "formik";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useTheme } from "styled-components";
import { Button, Rating } from "../../../../../../components";
import ModalAction from "../../../../../../components/Modal/Dialog/ModalAction/ModalAction";
import { Errors, FlexInput, Input, Label } from "../../style";

interface IProps {
  errors?: any;
  touched?: any;
  setModalDisplay?: (bool: boolean) => void;
}

const AddReviewForm = ({
  errors,
  touched,
  setModalDisplay,
  setFieldValue,
  values,
}: IProps & FormikProps<any>) => {



  return (
    <Form>
      <FlexInput>
        <Label>Write Your Review</Label>
        <Input
          name="comment"
          errors={errors}
          touched={touched}
          type={"textarea"}
          component="textarea"
          placeholder="Review"
        />
          {errors["comment"] && touched["comment"] && (
            <Errors>{errors["comment"]}</Errors>
          )}
      </FlexInput>
      <br />
      <FlexInput>
        <Label>Rate This Product</Label>
        <div style={{ padding: "1rem 0", textAlign: "center" }}>
          <ReactStars
            isHalf
            name="rating"
            edit
            value={values.rating}
            size={20}
            onChange={(value: number) => setFieldValue("rating", value)}
          />
          {errors["rating"] && touched["rating"] && (
            <Errors>{errors["rating"]}</Errors>
          )}
        </div>
      </FlexInput>

      <ModalAction>
        <Button
          type="submit"
          style={{ fontWeight: "bold" }}
          padding='1rem'

          // backgroundColor={theme.colors.primary}
        >
          Add
        </Button>
        <Button
          type="button"
          style={{ fontWeight: "bold" }}
          padding='1rem'
          // backgroundColor={theme.colors.error}
          onClick={() => {
            setModalDisplay && setModalDisplay(false);
          }}
        >
          Cancel
        </Button>
      </ModalAction>
    </Form>
  );
};

export default AddReviewForm;
