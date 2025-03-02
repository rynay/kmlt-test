import { FC } from 'react';
import { Type as TType } from '../../types';
import styles from './Type.module.scss';

type Props = {
    children: TType;
}

const typeString = {
    [TType.CLASSIC]: 'Classic',
    [TType.MVT]: 'MVT',
    [TType.SERVER_SIDE]: 'Server side',
}

export const Type: FC<Props> = ({ children }) => {
    return (
        <div className={styles.type}>
            {typeString[children]}
        </div>
    )
};
