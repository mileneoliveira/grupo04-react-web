import React from "react";

import { AuthProvider } from "./useAuth";
import { SnackProvider } from "./useSnack";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <SnackProvider>{children}</SnackProvider>
    </AuthProvider>
  );
}
