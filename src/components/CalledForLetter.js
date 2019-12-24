import React from "react";
import useBingo from "./useBingo";
import styles from "./CalledForLetter.module.css";
import classNames from "classnames";

function CalledForLetter({ letter, min, max }) {
  const [numbers] = useBingo();

  const allNumbers = [...Array(15).keys()].map(n => n + min);
  const lastCalled = numbers[0];

  return (
    <div className={styles.container}>
      <div className={styles.letter}>{letter}</div>
      {allNumbers.map(n => (
        <div
          key={n}
          className={classNames(
            styles.number,
            n === lastCalled ? styles.active : null,
            numbers.includes(n) ? styles.called : null
          )}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default CalledForLetter;
