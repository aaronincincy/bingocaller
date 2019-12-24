import { useContext } from "react";
import BingoContext from "./BingoContext";

function useBingo() {
  return useContext(BingoContext);
}

export default useBingo;
