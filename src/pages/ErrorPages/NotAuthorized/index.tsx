import React, { ErrorInfo } from "react";
import { Link } from "react-router-dom";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./style";

// import NotAuthorizedImage from "../../../assets/Images/A401NotAuth.jpg";

const NotAuthorized = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer
        imageUrl={
          "https://i.pinimg.com/originals/33/42/e4/3342e4ba684ff017acff7382cad86c7f.jpg"
        }
      />
      <ErrorImageText>
        Not Authorized Page{" "}
        <Link style={{ color: "white" }} to={"/"}>
          Back to home
        </Link>
      </ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default NotAuthorized;
