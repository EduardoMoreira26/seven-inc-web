import { Container, MenuNav } from './styles';
import { FiActivity, FiArchive, FiFolder, FiGrid, FiHome, FiLayout, FiLogOut } from 'react-icons/fi';

const Nav = () => (
  <Container>
    <MenuNav>
      <h2><FiHome /></h2>
      <h2><FiActivity /></h2>
      <h2> <FiArchive /></h2>
      <h2> <FiFolder /></h2>
      <h2> <FiGrid /></h2>
      <h2> <FiLayout /></h2>
      <h2><FiLogOut /></h2>
    </MenuNav>
  </Container>
);

export default Nav;