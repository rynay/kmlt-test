import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Page.module.scss";
import Loader from "../Loader";

type Props = PropsWithChildren<{
  title: string;
  loading: boolean;
  footer?: ReactNode;
}>;

export const Page: FC<Props> = ({ title, loading, footer, children }) => {
  return (
    <main className={styles.page}>
      <h1>{title}</h1>
      <div>
        {children}
        <Loader loading={loading} />
      </div>
      {footer && <footer>{footer}</footer>}
    </main>
  );
};
