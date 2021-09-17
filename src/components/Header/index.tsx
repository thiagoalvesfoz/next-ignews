import SigninButton from '../SignInButton';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header id={styles.headerContainer}>
      <div id={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SigninButton />
      </div>
    </header>
  )
}