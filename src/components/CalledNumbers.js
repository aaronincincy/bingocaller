import React from "react";
import CalledForLetter from "./CalledForLetter";
import classNames from "classnames";
import styles from "./CalledNumbers.module.css";

function CalledNumbers({ className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <CalledForLetter letter="B" min={1} max={15} />
      <CalledForLetter letter="I" min={16} max={30} />
      <CalledForLetter letter="N" min={31} max={45} />
      <CalledForLetter letter="G" min={46} max={60} />
      <CalledForLetter letter="O" min={61} max={75} />
    </div>
  );
}

export default CalledNumbers;
