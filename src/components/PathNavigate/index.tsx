import { useNavigate } from "react-router-dom";
import Typography from "../Typography";
import { PathLink, PathWrapper } from "./styles";

const PathNavigate = ({ name, ...props }) => {
  const navigate = useNavigate();
  return (
    <PathWrapper {...props}>
      <PathLink onClick={() => navigate(-1)}>Back /</PathLink>
      <Typography> {name}</Typography>
    </PathWrapper>
  );
};

export default PathNavigate;
