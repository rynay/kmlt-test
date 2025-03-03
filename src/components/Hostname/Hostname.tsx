import { FC } from "react";
import styles from "./Hostname.module.scss";
import { parseHostname } from "../../helpers";

type Props = {
  children?: string;
};

export const Hostname: FC<Props> = ({ children = "" }) => {
  return (
    <a className={styles.link} href={children} target="_blank" rel="noreferrer">
      {parseHostname(children)}
    </a>
  );
};
