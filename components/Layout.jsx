import Navbar from './Navbar'
import Footer from './Footer'
import TopNav from './TopNav';


const Layout = ({children}) => {
  return (
      <>
          <TopNav />
          <Navbar />
          {children}
          <Footer />
      </>
  )
};

export default Layout;
