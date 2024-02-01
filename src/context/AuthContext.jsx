import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("La autenticación debe ser proveída por un contexto");
  } else {
    return context;
  }
};

export const AuthProvider = ({ children }) => {
  const APIADRESS = `http://192.168.1.18:456/api`;

  const [user, setUser] = useState({});
  const [isauth, setIsAuth] = useState(false);
  const [loading, setisLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const checkUser = async () => {
      const token = await AsyncStorage.getItem("Token");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      };
      try {
        const res = await fetch(`${APIADRESS}/ChekLogin`, requestOptions);
        if (res.ok) {
          const result = await res.json();
          setIsAuth(true);
          setUser(result);
          setisLoading(false);
        } else {
          setisLoading(false);
        }
      } catch (error) {
        setisLoading(false);
        return error;
      }
    };
    checkUser();
  }, []);

  const Login = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(`${APIADRESS}/login`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        setUser(result.data);
        setIsAuth(true);
        return result;
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  const logout = async () => {
    AsyncStorage.removeItem("Token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ error, user, loading, Login, logout, isauth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
