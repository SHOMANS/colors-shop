import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik, FormikHelpers } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { toast } from "react-toastify";

import {
  LoginText,
  LoginSubText,
  Wrapper,
  ForgotPassword,
  ButtonSuginup,
  ButtonLogin,
  ContainerLogin,
  FormContainer,
} from "./style";
import {
  IschemaValidationLogin,
  schemaValidationLogin as validationSchema,
} from "../../../utils/helper/validation";
import LoginImage from "../../../assets/Images/login.png";
import { InnerColSection, Row } from "../../../components/Row";
import Divider from "../../../components/Divider";
import { CheckBox } from "../../../components/Form/checkBox";
import { InputController } from "../../../components/Form/inputController";
import { Container, Image } from "../../../components";
import { AppState } from "../../../redux/store";
import { TAllActionAuth } from "../../../redux/Auth/type";
import { AuthActions } from "../../../redux/Auth/action";
import { Column } from "../../../components/Col";
import UpdatedContainer from "../../../components/UpdatedContainer";

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const initialValues = {
    email: "",
    password: "",
    ischeckbox: false,
  };

  const navigate = useNavigate();

  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(
        AuthActions.loginAction(
          {
            email: values.email,
            password: values.password,
          },
          () => {
            navigate("/");
          }
        )
      );
    },
  });
  return (
    <UpdatedContainer>
      <InnerColSection>
        <Wrapper>
          <Container
            style={{ width: "50%" }}
            direction="column"
            justifyContent="space-between"
          >
            <LoginText>Login.</LoginText>
            <LoginSubText>
              Login with your data that you entered during registration
            </LoginSubText>
            <FormContainer>
              <form
                style={{
                  width: "80%",
                }}
                onSubmit={formik.handleSubmit}
              >
                <Container width="100%" direction="column" padding={0}>
                  <InputController
                    name="email"
                    label="Enter your email address"
                    type="email"
                    placeholder="Enter Email"
                    isRequired
                    errors={formik.errors?.email}
                    touched={formik.touched.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<AiOutlineMail />}
                    value={formik.values.email}
                  />

                  <InputController
                    name="password"
                    label="Enter your password"
                    type="password"
                    placeholder="Enter Password"
                    isRequired
                    errors={formik.errors?.password}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.password}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.password}
                  />
                  <ButtonLogin disabled={!formik.isValid} type="submit">
                    Login
                  </ButtonLogin>
                  <Column>
                    <CheckBox label="Remember me" name="Remember me" />
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <ForgotPassword
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                      >
                        Forgot your password?
                      </ForgotPassword>
                    </Link>
                  </Column>
                  <Divider thick="2px" width="100%" />
                  <ButtonSuginup onClick={() => navigate("/signup")}>
                    Sign up now
                  </ButtonSuginup>
                </Container>
              </form>
            </FormContainer>
          </Container>
          <Container style={{ width: "50%" }}>
            <Image src={LoginImage} size="xxxl" responsive />
          </Container>
        </Wrapper>
      </InnerColSection>
    </UpdatedContainer>
  );
};
export default Login;
