import { createContext, useContext, useCallback } from "react";
import api from "../services/api";
import usePersisted from "./usePersisted";

const SnackContext = createContext({});

const SnackProvider = ({ children }) => {
  const [snack, setSnack] = usePersisted("snack", {});

  // setSnack({
  //   id: 2,
  // });

  return (
    <SnackContext.Provider value={{ snack, setSnack }}>
      {children}
    </SnackContext.Provider>
  );
};

const useSnack = () => useContext(SnackContext);

export { SnackProvider, useSnack };
