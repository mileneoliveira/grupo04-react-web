import { createContext, useContext, useCallback } from "react";
import api from "../services/api";
import { notificationError } from "../utils/notifications";
import usePersisted from "./usePersisted";

const UserContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersisted("user", {});

  const signIn = useCallback(
    async (login) => {
      const signIndata = {
        email: login.email,
        senha: login.senha,
      };

      try {
        const { data, status } = await api.post("usuarios/login", signIndata);

        if (status !== 200) {
          notificationError(
            "Não foi possivel fazer o login",
            "Usuario não encontrado"
          );
          return false;
        }

        if (data) {
          setUser({
            id: data.id,
            name: data.nome,
            email: data.email,
            picture: data.avatar,
          });

          return true;
        }
      } catch (error) {
        return notificationError(
          "Não foi possivel fazer o login",
          "Usuario não encontrado"
        );
      }
    },
    [setUser]
  );

  const singOut = useCallback(() => {
    localStorage.removeItem("@MyHealt:user");
    localStorage.removeItem("@MyHealt:snack");
    window.location.reload();
  }, []);

  const logged = user.id;

  return (
    <UserContext.Provider value={{ signIn, singOut, user, logged }}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { AuthProvider, useAuth };
