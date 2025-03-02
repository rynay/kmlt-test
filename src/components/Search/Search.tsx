import { FC, useState } from 'react';
import { ReactComponent as Icon }  from '../../assets/search.svg';
import { getCountString } from './helpers';
import styles from './Search.module.scss';

type Props = {
    itemsCount: number;
    onSearch: (s: string) => void;
}

export const Search: FC<Props> = ({ itemsCount }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className={styles.form}>
            <Icon className={styles.form__icon} />
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='What test are you looking for?'
                className={styles.form__input}
            />
            <div className={styles.form__count}>{getCountString(itemsCount)}</div>
        </form>
    )
};