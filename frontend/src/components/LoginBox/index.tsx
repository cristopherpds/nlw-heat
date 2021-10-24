import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entra y comparte tu mensaje</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24"/>
        Entrar con GitHub
      </a>
    </div>
  )
}