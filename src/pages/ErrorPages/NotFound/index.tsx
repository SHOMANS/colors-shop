import { Link } from "react-router-dom";
import UpdatedContainer from "../../../components/UpdatedContainer";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./style";

const NotFound = () => {
  return (
    <UpdatedContainer>
      <ErrorImageOverlay>
        <ErrorImageContainer
          imageUrl={
            "https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
          }
        />
        <ErrorImageText>
          Not Found Page{" "}
          <Link style={{ color: "white" }} to={"/"}>
            Back to home
          </Link>
        </ErrorImageText>
      </ErrorImageOverlay>
    </UpdatedContainer>
  );
};

export default NotFound;
