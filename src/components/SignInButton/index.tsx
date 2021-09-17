import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function SigninButton() {  
  const [ session ] = useSession();
  
  return session  ? 
    (
      <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}
      >
          <img src={session.user.image} alt="profile image" title={session.user.name} />
          <span>
            { session.user.name }
            <FiX color="#737380" className={styles.closeIcon} />
          </span>
      </button>
    )
  :
    (
      <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signIn('github')}
      >
        <FaGithub color="#eba417"/>
        <span>Sign in with Github</span>
      </button>
    )
}