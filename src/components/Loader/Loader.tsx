import { FC } from "react";
import styles from "./Loader.module.scss";

type Props = {
  loading: boolean;
};

export const Loader: FC<Props> = ({ loading }) => {
  return (
    <div className={`${styles.loader} ${!loading ? styles.hidden : ""}`} />
  );
};
