import React from "react";
import useBingo from "./useBingo";
import BingoNumber from "./BingoNumber";
import styles from "./CallHistory.module.css";

function CallHistory() {
  const [numbersCalled] = useBingo();

  const history = [...numbersCalled].reverse();

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Call History</h3>
      <div className={styles.numbers}>
        {history.map(n => (
          <div className={styles.number}>
            <BingoNumber key={n} number={n} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallHistory;
