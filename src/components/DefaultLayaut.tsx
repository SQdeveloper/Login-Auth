import React from "react";
import { Link } from "react-router-dom";

interface props {
    children: React.ReactNode;
}

const DefaultLayaut : React.FC<props>= ({children}) => {
    return (
        <>
            <header className="w-full bg-blue-950 text-white py-4 px-8">
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/signup'>SignUp</Link>
                        </li>                                        
                        <li>
                            <Link to='/signout'>SignOut</Link>
                        </li>                                        
                    </ul>
                </nav>
            </header>

            <main className="pt-6 px-8">
                {children}
            </main>
        </>
    );
};

export default DefaultLayaut;