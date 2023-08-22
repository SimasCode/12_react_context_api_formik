import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

export default function AboutPage() {
  return (
    <div>
      <Title>About</Title>
      <p>Welcome to our page</p>
    </div>
  );
}
