import React from "react";
import classNames from "classnames";
import styles from "./BingoActions.module.css";
import useBingo from "./useBingo";
function BingoActions({ children, className }) {
  const [, { call, reset }] = useBingo();
  return (
    <div className={classNames(className, styles.container)}>
      <button className={styles.action} onClick={call}>
        Call Next Number
      </button>
      <button className={styles.action} onClick={reset}>
        Reset Game
      </button>
    </div>
  );
}
export default BingoActions;
