import { FC } from 'react';
import { Status as StatusType } from '../../types';
import styles from './Status.module.scss';
import { capitalize } from './helpers';

type Props = {
    children: StatusType;
}

export const Status: FC<Props> = ({ children }) => {
    return (
        <div
            className={`${styles.status} ${styles[children.toLowerCase()]}`}
        >
            {capitalize(children)}
        </div>
    )
};