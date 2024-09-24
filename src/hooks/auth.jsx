import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"; 
import Swal from 'sweetalert2';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    const [data, setData] = useState({});

    async function signIn({ email, password, close }) {
        if (!email || !password) {
            return  Toast.fire({
                icon: "warning",
                title: "Informe o email/senha."
              });
        }

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token, refreshToken } = response.data;

            localStorage.setItem("@mhimports:user", JSON.stringify(user));
            localStorage.setItem("@mhimports:token", token);
            localStorage.setItem("@mhimports:refreshToken", refreshToken);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
            close();

        } catch (error) {
            if (error.response) {
                Toast.fire({
                    icon: "warning",
                    title: error.response.data.message
                });
            } else {
                Toast.fire({
                    icon: "warning",
                    title: "Não foi possível entrar."
                });
            }
        }
    };

    function Logout() {
        localStorage.removeItem("@mhimports:token");
        localStorage.removeItem("@mhimports:user");
        localStorage.removeItem("@mhimports:refreshToken");

        setData({});
    };

    async function refreshToken() {
        const storedRefreshToken = localStorage.getItem("@mhimports:refreshToken");
        if (!storedRefreshToken) {
            Logout();
            return;
        }

        try {
            const response = await api.post("/sessions/refresh-token", { refreshToken: storedRefreshToken });
            const { token, refreshToken: newRefreshToken } = response.data;

            localStorage.setItem("@mhimports:token", token);
            localStorage.setItem("@mhimports:refreshToken", newRefreshToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData(prevState => ({
                ...prevState,
                token
            }));
        } catch (error) {
            Logout();  
        }
    };

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
                    
                    await refreshToken();  
                    originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem("@mhimports:token")}`;
                    return api(originalRequest); 
                }

                return Promise.reject(error); 
            }
        );

        
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
