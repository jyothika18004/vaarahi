import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LiquidCursor from '../common/LiquidCursor';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-transparent text-white">
            <LiquidCursor />
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
