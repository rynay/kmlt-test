import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Test } from "../../types";
import styles from "./ListItem.module.scss";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  "id"
> &
  Test;

export const ListItem: FC<Props> = ({
  id,
  name,
  type,
  status,
  siteId,
  ...props
}) => {
  return (
    <li
      {...props}
      className={styles.listItem}
    >
      <div>{name}</div>
      <div>{type}</div>
      <div>{status}</div>
      <div>{siteId}</div>
      <div>{siteId}</div>
    </li>
  );
};
