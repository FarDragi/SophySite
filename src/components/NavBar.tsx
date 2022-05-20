import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--primary-color);
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Slice = styled.div``;

const CustomLink = styled.a`
  margin-right: 1rem;
`;

const LoginButton = styled.button`
  border: none;
  background-color: var(--secondary-color);
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: var(--primary-color);
  text-transform: uppercase;
  cursor: pointer;
`;

const NavBar: React.FC = () => {
  return (
    <Container>
      <Slice>
        <Link href="/">
          <CustomLink>Sophy</CustomLink>
        </Link>
        <Link href="/">
          <CustomLink>Comandos</CustomLink>
        </Link>
        <Link href="/">
          <CustomLink>Adicionar</CustomLink>
        </Link>
      </Slice>
      <Slice>
        <LoginButton type="button">Login</LoginButton>
      </Slice>
    </Container>
  );
};

export default NavBar;
