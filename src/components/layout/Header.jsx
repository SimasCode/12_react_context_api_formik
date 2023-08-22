import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Wrap from '../../styled/Wrap.styled';

const HeaderContainer = styled(Wrap)`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;
`;

const Logo = styled(Link)`
  font-size: 25px;
  padding: 0.2em 0;
`;

const Nav = styled.nav``;

const OneLink = styled(NavLink)`
  font-size: 17px;
  padding: 0.3em 0.8em;
  border: 1px solid transparent;

  &:hover {
    background-color: gray;
  }

  &.active {
    border: 1px solid gray;
    font-weight: 600;
  }
`;

export default function Header() {
  return (
    <HeaderContainer as={'header'}>
      <Logo to={'/'}>OurLogo</Logo>
      <Nav>
        <OneLink to={'/'} className='navLink'>
          Home
        </OneLink>
        <OneLink to={'/about'} className='navLink'>
          About Us
        </OneLink>
        <OneLink to={'/vip'} className='navLink'>
          VIP
        </OneLink>
        <OneLink to={'/login'} className='navLink'>
          Login
        </OneLink>
      </Nav>
    </HeaderContainer>
  );
}
