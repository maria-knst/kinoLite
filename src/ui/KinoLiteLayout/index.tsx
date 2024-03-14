import { ReactNode } from "react";
import Navbar from "../../components/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const KinoLiteLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar/>
            <div className="container-fluid bg-dark vh-100">
                <div className="container">
                {children}
                </div>
            </div>
        </>
    );
};

export default KinoLiteLayout;