import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.scss';

type Props = PropsWithChildren<{
    title: string;
}>

export const Page: FC<Props> = ({ title, children }) => {
    return (
        <main className={styles.page}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </main>
    )
}