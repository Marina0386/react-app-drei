import userIcon from './userIcon.png';
import logotip from './logotip.jpeg';
import styles from './Header.module.css';

function Header (props) {
    const {isLogin} = props

    return (
        <header className = {styles.container}>
            <img className = {styles.logotip} src = {logotip} alt = 'logotip'/>
            {
                isLogin ? (
                    <img className = {styles.userIcon} src = {userIcon} alt = 'user'/>
                ) : (
                    <div>
                        <button>Login</button>
                        <button>Registration</button>
                    </div>
                )
            }
        </header>
    )
}




export default Header;