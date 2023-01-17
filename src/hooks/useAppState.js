import { useContext } from "react";
import AppContext from "../components/contexts/appContext";

const useAppState = () => {
  const { appState, setAppState } = useContext(AppContext);

  return { appState, setAppState };
};

export default useAppState;
