import React from "react";
import useBingo from "./useBingo";
import BingoNumber from "./BingoNumber";
import styles from "./LastNumberCalled.module.css";

function LastNumberCalled() {
  const [numbersCalled] = useBingo();

  if (numbersCalled.length === 0) {
    return <div className={styles.last}>&nbsp;</div>;
  }

  return (
    <div className={styles.last}>
      {<BingoNumber number={numbersCalled[0]} />}
    </div>
  );
}

export default LastNumberCalled;
