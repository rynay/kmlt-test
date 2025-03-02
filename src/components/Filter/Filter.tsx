import styles from './Filter.module.scss';

export const Filter = () => {
    return (
        <ul className={styles.filter}>
            <li>Name</li>
            <li>Type</li>
            <li>Status</li>
            <li>Site</li>
        </ul>
    )
};
