import { Link } from "react-router-dom";
import Typography from "../../Typography";
import { LogoSt } from "./LogoSt";

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography
        style={{ fontWeight: "bold" }}
        variant="h4"
        font-family="mulish"
      >
        <span style={{ color: "#FCDD06" }}>Color</span>
        <span style={{ color: "white" }}>Shop</span>
      </Typography>
    </LogoSt>
  );
}
