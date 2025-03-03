import { NavLink } from 'react-router';
import { ReactComponent as Icon } from '../../assets/arrow-up.svg';
import styles from './Back.module.scss';

export const Back = () => {
    return (
        <NavLink to="/" className={styles.back}>
            <Icon />
            <span>Back</span>
        </NavLink>
    )
}