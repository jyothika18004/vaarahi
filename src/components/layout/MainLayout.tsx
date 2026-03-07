import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';
import LiquidCursor from '../common/LiquidCursor';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-transparent text-white overflow-x-hidden">
            <LiquidCursor />
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <BottomNav />
            <Footer />
        </div>
    );
};

export default MainLayout;
