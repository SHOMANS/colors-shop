import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";

import { Container, Divider, Image, Typography } from "../../../components";
import { AuthActions } from "../../../redux/Auth/action";
import { IUser, TAllActionAuth } from "../../../redux/Auth/type";
import { AppState } from "../../../redux/store";
import {
  DashboardContainer,
  DashImgContainer,
  NavLink,
  OutLink,
} from "../style";
import { useTheme } from "styled-components";

interface IProfileDashboard {
  user?: IUser;
  isActive: any;
}

const ProfileDashboard = ({ user, isActive }: IProfileDashboard) => {
  const navigation = useNavigate();
  const theme = useTheme();

  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();
  const handleLoagout = () => {
    dispatch(
      AuthActions.logoutSuccess(() => {
        navigation("/login");
      })
    );
  };
  return (
    <DashboardContainer
      direction="column"
      align-items="flex-start"
      width="30%"
      background={theme.background.paper}
      border-radius="16px"
      padding=".8em"
    >
      <DashImgContainer padding="1em">
        <Image
          src={user?.profileImage}
          width="50%"
          height="50%"
          variant="circle"
          border
          style={{ margin: "0" }}
        />
        <Typography
          variant="h3"
          fontWeight={500}
          fontSize="1rem"
          margin="0.5em 0 0 0.5em"
        >
          {`${user?.firstName}  ${user?.lastName}`}
        </Typography>
      </DashImgContainer>
      <Container
        direction="column"
        align-items="flex-start"
        gap="10px"
        // justify-content="space-between"
        margin-bottom=".1em"
        // min-height="150px"
        padding=".8rem"
      >
        <NavLink to="#" onClick={isActive}>
          My Orders
        </NavLink>
        <NavLink to="#">Wishlist</NavLink>
        <NavLink to="#">Notifications</NavLink>
        <NavLink to="#">Settings</NavLink>
      </Container>
      <Divider color="#707070" />
      <OutLink to="#" onClick={handleLoagout}>
        Logout
      </OutLink>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
