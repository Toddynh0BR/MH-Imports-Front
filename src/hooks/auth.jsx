import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"; 

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password, close }) {
        if (!email || !password) {
            return alert("Informe o email/senha.");
        }

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token, refreshToken } = response.data;

            localStorage.setItem("@mhimports:user", JSON.stringify(user));
            localStorage.setItem("@mhimports:token", token);
            localStorage.setItem("@mhimports:refreshToken", refreshToken);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
            close()

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }
    }

    function Logout() {
        localStorage.removeItem("@mhimports:token");
        localStorage.removeItem("@mhimports:user");
        localStorage.removeItem("@mhimports:refreshToken");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@mhimports:token");
        const user = localStorage.getItem("@mhimports:user");

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }

        const interceptor = api.interceptors.response.use(
            response => response, 
            async error => {
                const originalRequest = error.config;
        

                if (error.response && error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;  
        
                    const refreshToken = localStorage.getItem("@mhimports:refreshToken");
                    if (refreshToken) {
                        try {
                            await refreshToken();  
                            
              
                            originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem("@mhimports:token")}`;
                            return api(originalRequest); // Refaz a requisição original
                        } catch (error) {
                            Logout(); // Se o refresh falhar, faz logout
                        }
                    }
                }
        
                return Promise.reject(error); // Se não for 401, ou falhar, rejeita o erro
            }
        );

        // Remove o interceptor ao desmontar o componente
        return () => {
            api.interceptors.response.eject(interceptor);
        };

    }, []);

    return (
        <AuthContext.Provider value={{ signIn, Logout, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
