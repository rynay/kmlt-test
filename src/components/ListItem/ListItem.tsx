import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Test } from "../../types";
import styles from "./ListItem.module.scss";
import Status from "../Status";
import Type from "../Type";
import Hostname from "../Hostname";
import Link from "../Link";

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
  siteValue,
  ...props
}) => {
  return (
    <li
      {...props}
      className={`${styles.listItem} ${styles[`listItem_${id}`]}`}
    >
      <div>{name}</div>
      <Type>{type}</Type>
      <Status>{status}</Status>
      <Hostname>{siteValue?.url}</Hostname>
      <Link id={id} status={status} />
    </li>
  );
};
