import styled from 'styled-components';
import Wrap from '../styled/Wrap.styled';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

export default function HomePage() {
  return (
    <Wrap>
      <Title>HomePage</Title>
      <p>Welcome to our page</p>
    </Wrap>
  );
}
