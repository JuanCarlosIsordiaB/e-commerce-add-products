import {Navbar} from '../components/Navbar';

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};
