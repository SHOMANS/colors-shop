import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Parent } from './style';
import ProfileInfo from './Sections/ProfileInfo';
import ProfileDashboard from './Sections/ProfileDashboard';
import { getProfile } from '../../redux/User/action';
import { AppState } from '../../redux/store';
import { TAllActionUser } from '../../redux/User/type';
import { SpinnerContainer } from '../../components';
import OrdersProduct from './Orders';
import UpdatedContainer from '../../components/UpdatedContainer';

const Profile = () => {
  const [active, setActive] = useState(false);
  const isActive = () => setActive(true);
  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionUser>>();
  const useProfile = useSelector((state: AppState) => state.user.myProfile);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return useProfile.isLoading ? (
    <SpinnerContainer />
  ) : (

      <UpdatedContainer
        justifyContent='space-between'

      >
        <Parent>

        <ProfileDashboard user={useProfile.user} isActive={isActive} />
        {active ? <OrdersProduct /> : <ProfileInfo user={useProfile.user} />}
        </ Parent>
      </UpdatedContainer >

  );
};

export default Profile;
