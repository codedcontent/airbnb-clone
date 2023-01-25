import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    initialSearchComponentClicked: false,
    initialSearchComponentClickedType: null,
    selectedHomeSearchFilter: 0,
    isSupportOpen: false,
    listing: {
      checkInDate: null,
      checkOutDate: null,
    },
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
