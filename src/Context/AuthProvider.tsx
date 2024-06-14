import { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean
}

interface Props {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider : React.FC<Props> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;