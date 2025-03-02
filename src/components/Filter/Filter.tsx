import { FC } from 'react';
import styles from './Filter.module.scss';
import { Test } from '../../types';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';

type Props = {
    sort?: keyof Test;
    filters: (keyof Test)[];
    order: 'asc' | 'desc';
    onSort: (s: keyof Test) => void;
}

export const Filter: FC<Props> = ({ sort, order, onSort, filters }) => {
    return (
        <div className={styles.filter}>
            {filters.map(filter => (
                <button
                    onClick={() => onSort(filter)}
                >
                    <span>{filter}</span>
                    <ArrowUp
                        className={
                            `${
                                styles.filter__icon
                            } ${
                                filter !== sort ? styles.filter__icon_hidden : ''
                            } ${
                                order === 'desc' ? styles.filter__icon_down : ''
                            }`
                        }
                    />
                </button>
            ))}
        </div>
    )
};
