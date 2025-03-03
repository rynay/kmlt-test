import { FC } from "react";
import { NavLink } from "react-router";
import { Status, Test } from "../../types";
import { getLink, getLinkClassName, getLinkName } from "./helpers";
import styles from "./Link.module.scss";

type Props = {
  id: Test["id"];
  status: Status;
};

export const Link: FC<Props> = ({ id, status }) => {
  const link = getLink(id, status);
  const linkName = getLinkName(status);
  const className = getLinkClassName(status);

  return (
    <NavLink to={link} className={`${styles.link} ${styles[className]}`}>
      {linkName}
    </NavLink>
  );
};
