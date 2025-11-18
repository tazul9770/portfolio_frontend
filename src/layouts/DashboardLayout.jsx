import DashNavbar from './DashNavbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const DashboardLayout = () => {
    return (
        <>
           <DashNavbar/>
           <Outlet/>
           <Footer/> 
        </>
    );
};

export default DashboardLayout;