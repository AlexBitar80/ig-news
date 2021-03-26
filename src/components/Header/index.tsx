import styles from './styles.module.scss';
import { SignInButton } from '../SingInButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>

        <nav>
          <a className={styles.active}>Inicio</a>
          <a>publicações</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}