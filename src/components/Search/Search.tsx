import { FC } from 'react';
import { ReactComponent as Icon }  from '../../assets/search.svg';
import { getCountString } from './helpers';
import styles from './Search.module.scss';

type Props = {
    itemsCount: number;
    search: string;
    onSearch: (s: string) => void;
}

export const Search: FC<Props> = ({ itemsCount, search, onSearch }) => {
    return (
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <Icon className={styles.form__icon} />
            <input
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder='What test are you looking for?'
                className={styles.form__input}
            />
            <div className={styles.form__count}>{getCountString(itemsCount)}</div>
        </form>
    )
};