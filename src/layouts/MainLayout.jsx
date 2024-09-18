import proptypes from 'prop-types';
import Nav from '../components/Nav';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function MainLayout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Nav nombre={user?.fName} />
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: proptypes.any.isRequired,
};

export default MainLayout;
