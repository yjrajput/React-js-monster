import React, { useState } from 'react'
import styles from './Form.module.css'
const Form = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');
  return (
    <div className={styles.container}>
        <div className={styles['card-container']}>
            <div className={styles['img-container']}>
                
            </div>

            <form>
                <input type="text" placeholder='Enter username' value={userName} onChange={(e) => setUserName(e.target.value)} />
            </form>
        </div>
    </div>
  )
}

export default Form