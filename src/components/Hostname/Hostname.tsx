import { FC } from "react";
import { parseHostname } from "./helpers";
import styles from './Hostname.module.scss';

type Props = {
    children?: string;
}

export const Hostname: FC<Props> = ({ children = '' }) => {
    return (
        <a
            className={styles.link}
            href={children}
            target="_blank"
            rel="noreferrer"
        >
            {parseHostname(children)}
        </a>
    )
};