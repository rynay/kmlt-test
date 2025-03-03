import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./List.module.scss";

type Props = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export const List: FC<Props> = ({ children, ...props }) => {
  return (
    <ul {...props} className={styles.list}>
      {children}
    </ul>
  );
};
