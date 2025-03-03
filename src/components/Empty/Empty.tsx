import { FC } from "react";
import styles from "./Empty.module.scss";

type Props = {
  onReset: VoidFunction;
};

export const Empty: FC<Props> = ({ onReset: reset }) => {
  return (
    <div className={styles.empty}>
      <p>Your search did not match any results.</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
