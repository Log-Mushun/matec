// components
import Nav from '../components/Nav';


const Layout = ({ children }) => {
  return (
    <div
      className={'page bg-site text-white bg-cover bg-no-repeat relative'}
    >
      {children}
    </div>
  );
};

export default Layout;
