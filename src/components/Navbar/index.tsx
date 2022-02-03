import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  BsFillBookmarkDashFill,
  BsFillCartFill,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { FiSettings } from "react-icons/fi";
import { ListNavItem } from "./ListNavItem";
import {
  List,
  StyleObj,
  NavBox,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  ListNav,
  IconList,
  NavIcon,
  Hamburger,
  DropDownLi,
  Badge,
  IConsContainer,
  Dropbtn,
  DropDownContent,
  SubA,
} from "./NavBarStyles";
import Logo from "./Logo/Logo";
import { useToken } from "../../utils/helper/useToken";
import { AppState } from "../../redux/store";
import { ActionCartType } from "../../redux/Cart/type";
import { IUser } from "../../redux/Auth/type";
import { logoutSuccess } from "../../redux/Auth/action";

import { myActionCart } from "../../redux/Cart/action";
import UpdatedContainer from "../UpdatedContainer";
import SVGICON from "../HeaderIcons/headerIcons";
import { useTheme } from "styled-components";

const Style = {
  color: "#FFF",
  fill: "#FFF",
  marginRight: "5px",
  marginBottom: "2px",
  lineHieght: "1px",
};

export const Navbar = ({ open, setoggle }) => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const theme = useTheme();
  const user: IUser = useToken();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const cart = useSelector((state: AppState) => state.cart);

  useEffect(() => {
    dispatch(myActionCart());
  }, [dispatch]);

  useEffect(() => {
    console.log(theme, " theme in header");
  }, [theme]);

  const Logout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };
  return (
    <ListNav open={open}>
      <div>
        <Logo />
        <NavBox style={{ margin: "auto" }}>
          <SearchInput
            value={value}
            type="text"
            style={{ fontFamily: "mulish" }}
            placeholder="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <SearchButton
            style={{ fontFamily: "mulish" }}
            onClick={() => {
              navigate(`/search${value ? `?keyword=${value}` : ""}`);
            }}
          >
        Products
          </SearchButton>
        </NavBox>
        <NavIcon>
          <IConsContainer>
            <SVGICON
              description={theme.type !== "light" ? "Light" : "Dark"}
              onClick={setoggle}
            >
              <svg width={"25px"} fill="#fff">
                {theme.type === "light" ? (
                  <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
                ) : (
                  <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"></path>
                )}
              </svg>
            </SVGICON>

            {user?._id ? (
              <IconList>
                <FaUserAlt size="16px" style={Style} />
                <DropDownLi>
                  <Dropbtn> {user.firstName}</Dropbtn>
                  <DropDownContent>
                    {" "}
                    {user.isAdmin && <SubA to="/dashboard">Dashboard</SubA>}
                    <SubA to="/profile">profile</SubA>
                    {user.isAdmin && <SubA to="/addproduct">Add Product</SubA>}
                  </DropDownContent>
                </DropDownLi>
              </IconList>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", fontFamily: "mulish" }}
              >
                <IconList>
                  <FaUserAlt size="16px" style={Style} />
                  Login/Signup
                </IconList>
              </Link>
            )}
            <Link
              to="/cart"
              style={{ textDecoration: "none", fontFamily: "mulish" }}
            >
              <IconList style={{ position: "relative" }}>
                {!cart.isLoading && cart.success && (
                  <Badge>{cart?.cart?.items.length}</Badge>
                )}
                <BsFillCartFill size="16px" style={Style} />
                Cart
              </IconList>
            </Link>
            {user?._id && (
              <IconList onClick={Logout}>
                <BiLogOut size="16px" style={Style} />
                Logout
              </IconList>
            )}
          </IConsContainer>
        </NavIcon>
      </div>
    </ListNav>
  );
};
