/* eslint-disable @typescript-eslint/ban-types */
import * as Yup from "yup";

export interface IschemaValidationLogin {
  email: string;
  password: string;
  ischeckbox?: boolean;
}

export const schemaValidationLogin =
  (): Yup.SchemaOf<IschemaValidationLogin> => {
    return Yup.object().shape({
      email: Yup.string()
        .email("it should be correct email")
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Required email"),
      password: Yup.string().min(4, "Too Short!").required("Required"),
      ischeckbox: Yup.boolean().optional(),
    });
  };

export interface ISchemaValidationSuginup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const schemaValidationSignUp =
  (): Yup.SchemaOf<ISchemaValidationSuginup> => {
    return Yup.object().shape({
      firstName: Yup.string()
        .required("First name is required")
        .matches(
          /^[A-Za-z ]+$/,
          "Should field with the alphabet with spaces format"
        ),
      lastName: Yup.string()
        .required("Last name is required")
        .matches(
          /^[A-Za-z ]+$/,
          "Should field with the alphabet with spaces format"
        ),
      email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
          `Password should be 8 digits length at least, contains at least one Capital letter, contains at least one number.)`
        ),
      passwordConfirmation: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password"), null], "Passwords should matches"),
    });
  };

export const updateProfileSchema = Yup.object({
  name: Yup.string().required("Please enter a name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string().min(6),
  passwordConfirmation: Yup.string()
    .min(6)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export type updateProfileSchemaType = Yup.InferType<typeof updateProfileSchema>;

export interface IShippingSchema {
  country: string;
  city: string;
  zip: string;
  address: string;
}
export const ShippingSchema = (): Yup.SchemaOf<IShippingSchema> => {
  return Yup.object().shape({
    country: Yup.string().required("Please enter country name"),
    city: Yup.string().required("Please enter city name"),
    zip: Yup.string().required("Please enter your address"),
    address: Yup.string().required("Please enter your address"),
  });
};

export interface IAddProductSchema {
  id?: string;
  images: Array<string | Object>;
  name: string;
  brand: string;
  categories: Array<any>;
  description: string;
  countInStock: number;
  price: number;
  colors: Array<string>;
}
export interface IAddReview {
  comment: string;
  rating: number;
}
export const AddProductSchema = (): Yup.SchemaOf<IAddProductSchema> => {
  return Yup.object().shape({
    id: Yup.string().optional(),
    images: Yup.array()
      .of(Yup.mixed().oneOf([Yup.string(), Yup.object()]))
      .required(),
    name: Yup.string().required("Please enter product name"),
    brand: Yup.string().required("Please enter product brand"),
    description: Yup.string()
      .required("Please enter product description")
      .max(200, "Max 200 Char"),
    countInStock: Yup.number()
      .required("Please enter product count In Stock")
      .positive()
      .integer(),
    price: Yup.number().required("Please enter product price").positive(),
    colors: Yup.array().required("Please enter product colors"),
    categories: Yup.array().required("Please enter product categories"),
  });
};
export const AddReviewSchema = (): Yup.SchemaOf<IAddReview> => {
  return Yup.object().shape({
    comment: Yup.string()
      .required("Review is required")
      .min(5, "Too Short Review!")
      .max(500, "Too Long Review!"),
      rating: Yup.number()
      .required("rate is required")
      .min(1, "Rate Should Be More than 0")
      .max(5, "Rate Should Be Less than 6"),
  });
};
