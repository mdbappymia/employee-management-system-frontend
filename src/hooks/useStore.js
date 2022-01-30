import { useContext } from "react";
import { ContextApi } from "../context/ContextProvider";

const useStore = () => {
  return useContext(ContextApi);
};

export default useStore;
