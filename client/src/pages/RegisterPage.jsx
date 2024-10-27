import React from 'react'
import styles from './RegisterPage.module.css'
import robotImage from '../assets/robo.png';
import Form from '../components/Form.jsx'


export default function RegisterPage() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div><img src={robotImage} alt="A friendly robot" className={styles.image} />
            </div>
            <div className={styles.label}>
                <p className={styles.text1}>Welcome aboard my friend</p>
                <p className={styles.text2}>just a couple of clicks and we start</p>
            </div>            
        </div>
        <div className={styles.right}>
            <div className={styles.header}>
                <h1 className={styles.heading}>Login</h1>
            </div>
            <Form name="Using props"/>
            <div className={styles.footer}>
                <button>Log in</button>
                <p>Have no account yet?</p>
                <button>Register</button>
            </div>
        </div>
    </div>
  )
}
