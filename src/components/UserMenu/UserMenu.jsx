import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { logOut } from 'redux/Auth/operations';
import { Btn, UserMenuTitle, Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserMenuTitle>Welcome, {user.name} </UserMenuTitle>
      <Btn onClick={() => dispatch(logOut())}>Log Out</Btn>
    </Container>
  );
};
