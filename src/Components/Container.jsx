import styles from "./Container.module.css"
export default function Conatiner({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
